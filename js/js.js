
$(document).ready(function () {
    $('#previous').on('click', function () {
        document.alert("memes");

        // Change to the previous image
        let slider = document.getElementsByClassName("imgContainer");
        slider.classList.remove(("imgSlide" + currentImage));
        decreaseImage();
        slider.classList.add(("imgSlide" + currentImage));
    }); 
    $('#next').on('click', function(){
        // Change to the next image
        let slider = document.getElementsByClassName("imgContainer");
        slider.classList.remove(("imgSlide" + currentImage));
        increaseImage();
        slider.classList.add(("imgSlide" + currentImage));
    }); 
  
    var currentImage = 1;
    var totalImages = 3;
  
    function increaseImage() {
      /* Increase currentImage by 1.
      * Resets to 1 if larger than totalImages
      */
      ++currentImage;
      if(currentImage > totalImages) {
        currentImage = 1;
      }
    }
    function decreaseImage() {
      /* Decrease currentImage by 1.
      * Resets to totalImages if smaller than 1
      */
      --currentImage;
      if(currentImage < 1) {
        currentImage = totalImages;
      }
    }
    window.setInterval(function() {
        $('#next').click();
      }, 5000);//auto scrolls every 5 seconds
  });