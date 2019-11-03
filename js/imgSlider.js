function prevFun()
{
    let slider = document.getElementsByClassName("imgContainer");

    let className = "imgSlide" + String(currentImage);
    removeClass(slider, className);

    decreaseImage();

    className = "imgSlide" + String(currentImage);
    addClass(slider, className);
}

function nextFun()
{
    let slider = document.getElementsByClassName("sliderImg");

    let className = "imgSlide" + String(currentImage);
    removeClass(slider, className);

    increaseImage();

    className = "imgSlide" + String(currentImage);
    addClass(slider, className);
}

function addClass(slider, className)
{
    for (let c1 = 0; c1 < slider.length; ++c1)
    {
        slider[c1].classList.add(className);
    }
}

function removeClass(slider, className)
{
    for (let c1 = 0; c1 < slider.length; ++c1)
    {
        slider[c1].classList.remove(className);
    }
}
  
var currentImage = 1;
var totalImages = document.getElementsByClassName("sliderImg").length;

addClass(document.getElementsByClassName("sliderImg"), "imgSlide1");



function increaseImage()
{
    ++currentImage;
    if (currentImage > totalImages)
    {
        currentImage = 1;
    }
}

function decreaseImage()
{
    --currentImage;
    if (currentImage < 1)
    {
        currentImage = totalImages;
    }
}

//auto scrolls every 5 seconds
window.setInterval(function()
{
    nextFun();
    
}, 5000);


