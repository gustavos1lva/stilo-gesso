// src/utils/loadImages.js
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    const key = item.replace("./", "");
    images[key] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../data", false, /\.(jpg|jpeg|png|heic)$/)
);

export default images;
