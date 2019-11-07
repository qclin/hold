export function findImagePath(tag, images) {
  const imageElement = images.find(element => element.name == tag);
  return imageElement.path;
}
