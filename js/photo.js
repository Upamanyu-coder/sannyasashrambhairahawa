

document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const images = document.querySelectorAll('.gallery-item img');
    let currentIndex = 0;
  
    function showImage(index) {
        lightboxImage.src = images[index].src;
        currentIndex = index;
        lightbox.style.display = 'block';
    }
  
    images.forEach((image, index) => {
        image.addEventListener('click', function() {
            showImage(index);
        });
    });
  
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
  
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });
  
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });
  
    // Close lightbox when clicking outside of the image
    lightbox.addEventListener('click', function(event) {
        if (event.target !== lightboxImage && event.target !== prevBtn && event.target !== nextBtn) {
            lightbox.style.display = 'none';
        }
    });
  });
  