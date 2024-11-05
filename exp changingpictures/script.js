function startAnimations() {
    const images = document.querySelectorAll('.animate');
  
    // Apply animations to each image with a delay
    images.forEach((image, index) => {
      setTimeout(() => {
        switch (index) {
          case 0:
            image.style.animation = "slideInFromLeft 1s forwards";
            break;
          case 1:
            image.style.animation = "zoomIn 1s forwards";
            break;
          case 2:
            image.style.animation = "fadeIn 4s forwards";
            break;
          case 3:
            image.style.animation = "rotate 1s forwards";
            break;
          case 4:
            image.style.animation = "scaleUp 1s forwards";
            break;
          case 5:
            image.style.animation = "bounce 1s forwards";
            break;
          case 6:
            image.style.animation = "flip 1s forwards";
            break;
          case 7:
            image.style.animation = "zoomOut 1s forwards";
            break;
          default:
            break;
        }
        image.style.opacity = 1; // Make images visible as they animate
      }, index * 500); // Delay each animation by 0.5 seconds
    });
  }
  