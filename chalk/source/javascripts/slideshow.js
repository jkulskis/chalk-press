var slideIndex = 0;

showSlide(slideIndex);

function nextImage() {
  showSlide((slideIndex -= 1));
}

function previousImage() {
  showSlide((slideIndex += 1));
}

document.getElementById("slideShowPrevious").addEventListener("click", previousImage, false);
document.getElementById("slideShowNext").addEventListener("click", nextImage, false);

function showSlide(n) {
  let images = document.getElementsByClassName("lookbook-gallery-image");
  if (n >= images.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = images.length - 1;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  images[slideIndex].style.display = "block";
}
