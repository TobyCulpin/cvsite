document.onmousedown = handler;

function handler(event)
{
    if (event.target.id == "email")
    {
        sendEmail("CulpinTobiasWork@gmail.com", "", "");
    }
    if (event.target.className.substring(0,7) == "boxItem")
    {
        var box = document.getElementsByClassName('box');
        box[0].classList.add("hide");
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