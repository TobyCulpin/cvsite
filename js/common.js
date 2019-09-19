/*
Disabled while under construction

document.onmouseover = document.onmouseout = handler;

var box = document.getElementsByClassName('box');
box[0].classList.add("hide");

function handler(event)
{
    if (event.target.className == 'logoid' && event.relatedTarget.className != 'box')
    {

        if (event.type == 'mouseover')
        {

            box[0].classList.remove("hide");
            box[0].classList.add("show");            
        }

        if (event.type == 'mouseout')
        {
            box[0].classList.remove("show");
            box[0].classList.add("hide");
            alert(event.clientX);
        }
    }
}
*/