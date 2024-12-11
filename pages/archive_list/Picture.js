import { loadCSS } from "/TRANS_HYPE/utils/loadCSS.js";

export default function Picture(srcName) {
  loadCSS("/TRANS_HYPE/pages/archive_list/Picture.css");
  const picture = document.createElement("img");

  picture.src = getImgFilePath(320, srcName);
  picture.srcset = `
        ${getImgFilePath(320, srcName)} 320w,
        ${getImgFilePath(640, srcName)} 640w,
        ${getImgFilePath(1024, srcName)} 1024w,
      `;
  picture.sizes = "(max-width: 500px) 320px, (max-width: 800px) 640px, 1024px";
  return picture;
}

function getImgFilePath(width, srcName) {
  const archivePicturesPath = "../../assets/archive_pictures/";
  switch (width) {
    case 320:
      return archivePicturesPath + "w320/" + srcName;
    case 640:
      return archivePicturesPath + "w640/" + srcName;
    case 1024:
      return archivePicturesPath + "w1024/" + srcName;
  }
}
