
document.onmouseover = handler;

var box = document.getElementsByClassName('box');
box[0].classList.add("hide");

function hide()
{
    box[0].classList.remove("show");
    box[0].classList.add("hide");
}

function show()
{
    box[0].classList.remove("hide");
    box[0].classList.add("show");
}

function handler(event)
{
    
    if (event.target.id == 'blankBox1')
    {
        
        show();
        //alert(`(${event.clientX}, ${event.clientY})`);            
    }
    
    //if mousing over from blankBox1 to anywhere but boxItem
    //OR if mousing over from boxItem to anywhere but blankBox1 and another boxItem
    if( (event.relatedTarget.id == 'blankBox1' && event.target.className.substring(0, 7) != 'boxItem')
        || (event.relatedTarget.className.substring(0, 7) == 'boxItem' && !(event.target.id == 'blankBox1' || event.target.className.substring(0, 7) == "boxItem")) )
    {
        hide();
        //alert(`(${event.clientX}, ${event.clientY})`);
        //alert(`${event.target.className}, ${event.relatedTarget.className}, ${event.target.id}, ${event.relatedTarget.id}`);
    }
}