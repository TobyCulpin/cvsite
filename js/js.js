$(document).ready(function() {
    $('#previous').on('click', function(){
      // Change to the previous image
      $('#img_' + currentImage).stop().fadeOut(0);
      decreaseImage();
      $('#img_' + currentImage).stop().fadeIn(1000);
    }); 
    $('#next').on('click', function(){
      // Change to the next image
      $('#img_' + currentImage).stop().fadeOut(0);
      increaseImage();
      $('#img_' + currentImage).stop().fadeIn(1000);
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