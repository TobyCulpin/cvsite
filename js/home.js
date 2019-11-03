document.onmousedown = handler;

function handler(event)
{
    if (event.target.id == "mapImg")
    {
        
        var href = "../images/map.png"
        var newTitle = "Tobias Culpin CV - Location"

        // open the window
        var newWin = window.open(href, "_blank");

        // add a load listener to the window so that the title gets changed on page load
        newWin.addEventListener("load", function() {
            newWin.document.title = newTitle;
        });

        // stop the default `a` link or you will get 2 new windows!
        event.returnValue =  false;
    }

    if (event.target.id == "email")
    {
        sendEmail("CulpinTobiasWork@gmail.com", "", "");

        if (event.target.className.substring(0,7) == "boxItem")
        {
            var box = document.getElementsByClassName('box');
            box[0].classList.add("hide");
        }
    }
}

function sendEmail(address, subject, body)
{
    //alert("sent an email");

    let emailString = `mailto:${address}?subject=${subject}&body=${body}`;

    //opens the system email service with details passed
    var temp = window.open(emailString, 'emailWindow');
    setTimeout(function() { temp.close() }, 1);
}