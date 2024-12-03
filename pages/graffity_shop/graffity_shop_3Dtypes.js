import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class graffity_shop_3Dtypes {
  constructor(container_id) {
    this.assetPath = "../../assets/";
    this.container = document.querySelector(container_id);

    const renderer = new THREE.WebGL1Renderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(renderer.domElement);
    this._renderer = renderer;

    const scene = new THREE.Scene();
    this._scene = scene;

    this._setupCamera();
    this._setupLight();
    this._setupModel();
    //this._setupControls();

    this.resize();

    requestAnimationFrame(this.render.bind(this));
  }

  _setupCamera() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.001, 100);
    //camera.position.z = 9;
    camera.position.set(0, 0, 1.2);
    camera.lookAt(0, -0.1, 0);

    this._camera = camera;
  }

  _setupLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    this._scene.add(light);
  }

  _setupModel() {
    this.gltfLoader = new GLTFLoader();
    this.objects = [];
  }

  _setupControls() {
    new OrbitControls(this._camera, this.archieve_container);
  }

  reset_model(name) {
    let object_names = [name];

    for (let i = 0; i < this.objects.length; i++) {
      this._scene.remove(this.objects[i]);
    }

    this.objects = [];

    for (let i = 0; i < object_names.length; i++) {
      let directory = this.assetPath + "graffities/digital/" + object_names[i];
      this.gltfLoader.load(directory, (glb) => {
        let model = glb.scene;
        model.position.set(0, 0, 0);
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            this.graffiti_material1 = new THREE.MeshNormalMaterial({});
            this.graffiti_material2 = new THREE.MeshBasicMaterial({
              color: 0xffffff,
            });
            child.material = this.graffiti_material1;
          }
        });
        model.children[0].material.morphTargets = true;

        this._scene.add(model);
        this.objects.push(model);

        const animationClips = glb.animations;
        console.log(animationClips);
        const mixer = new THREE.AnimationMixer(model);
        animationClips.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        this._mixer = mixer;
      });
    }
  }

  reset_model_v3(name) {
    let object_names = [name];

    for (let i = 0; i < this.objects.length; i++) {
      this._scene.remove(this.objects[i]);
    }

    this.objects = [];

    for (let i = 0; i < object_names.length; i++) {
      let directory = this.assetPath + "graffities/dgitial/" + object_names[i];
      this.gltfLoader.load(directory, (glb) => {
        let model = glb.scene;
        model.children[0].position.set(0, 0, 0);
        model.children[0].material = new THREE.MeshNormalMaterial({
          transparent: true,
          opacity: 0.9,
        });
        this._scene.add(model);
        this.objects.push(model);
      });
    }
  }

  resize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this._camera.aspect = width / height;
    this._camera.updateProjectionMatrix();

    this._renderer.setSize(width, height);
  }

  render(time) {
    this._renderer.render(this._scene, this._camera);
    this.update(time);
    requestAnimationFrame(this.render.bind(this));
  }

  update(time) {
    this._renderer.setClearColor(0x000000, 0);

    //auto rotation
    time *= 0.001; // second unit

    if (this._mixer) {
      const deltaTime = time - this._previousTime;
      this._mixer.update(deltaTime);
    }
    this._previousTime = time;

    this._scene.rotation.y = Math.sin(time) / 2;
    //console.log(this.objects.length)
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].position.y = Math.sin(time * 5) * 0.05 + i / 2;
    }
  }
}
