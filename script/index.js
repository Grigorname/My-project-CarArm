debugger;
function changeImage(currentPhoto, direction) {
  const images = currentPhoto.querySelectorAll("img");
  let currentIndex = Array.from(images).findIndex((img) => img.style.display !== "none");

  currentIndex = (currentIndex + direction + images.length) % images.length;
  images.forEach((img, index) => {
    img.style.display = index === currentIndex ? "block" : "none";
  });
}

function attachArrowClickHandlers(photoElement) {
  const leftArrow = photoElement.querySelector(".left-arrow");
  const rightArrow = photoElement.querySelector(".right-arrow");
  leftArrow.onclick = () => changeImage(photoElement, -1);
  rightArrow.onclick = () => changeImage(photoElement, 1);
}

function initializePhotoGalleries() {
  const photoGalleries = document.querySelectorAll(".photo");
  photoGalleries.forEach(attachArrowClickHandlers);
}

initializePhotoGalleries();
