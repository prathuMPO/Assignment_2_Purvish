// Get references to HTML elements
var gallery = document.getElementById('gallery');
var largeImage = gallery.querySelector('figure img');
var smallImages = gallery.querySelectorAll('ul img');

// Loop through small images and add click event listeners
for (var i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener('click', function() {
    // Set the src and alt attributes of the large image to match the clicked small image
    var src = this.src.replace('-small', '-large');
    var alt = this.alt;
    largeImage.setAttribute('src', src);
    largeImage.setAttribute('alt', alt);
    // Update the caption with the alt text of the clicked small image
    var caption = gallery.querySelector('figcaption');
    caption.textContent = alt;
  });
  const gallery = document.querySelector("#gallery");
  const figure = gallery.querySelector("figure");
  const previews = gallery.querySelectorAll("li");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  
  let currentImage = 0;
  let imageCount = previews.length;
  
  // display the clicked image in the figure element
  function showImagePreview(event) {
    let clickedImage = event.target;
    currentImage = Array.from(previews).indexOf(clickedImage.parentNode);
    let imgPath = clickedImage.src.replace("-small", "-large");
    let titleText = clickedImage.alt;
    figure.querySelector("img").src = imgPath;
    figure.querySelector("figcaption").textContent = titleText;
    previews.forEach(preview => {
      preview.classList.remove("selected");
    });
    clickedImage.parentNode.classList.add("selected");
  }
  
  // navigate to the next image
  function nextImage() {
    currentImage++;
    if (currentImage >= imageCount) {
      currentImage = 0;
    }
    let nextImagePreview = previews[currentImage].querySelector("img");
    nextImagePreview.click();
  }
  
  // navigate to the previous image
  function prevImage() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = imageCount - 1;
    }
    let prevImagePreview = previews[currentImage].querySelector("img");
    prevImagePreview.click();
  }
  
  // add event listeners to the previews
  previews.forEach(preview => {
    let img = preview.querySelector("img");
    img.addEventListener("click", showImagePreview);
    let previewText = document.createElement("span");
    previewText.className = "preview-text";
    previewText.textContent = "Click here to preview";
    preview.appendChild(previewText);
  });
  
  // add event listeners to the arrow buttons
  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", prevImage);
  
  // add keyboard shortcuts
  document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === " ") {
      nextImage();
    } else if (event.key === "ArrowLeft") {
      prevImage();
    }
  });

  
  

}
