showTime();

setInterval(showTime,15000)

function showTime()
{
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let text = 'AM';
    if(hour>12)
    {
        hour=hour-12;
        text='PM';
    }
    hour = hour.toString().padStart(2,'0');
    minutes = minutes.toString().padStart(2,'0');
    document.getElementById("clock").innerHTML = hour + ":" + minutes + text;
}

document.getElementById("minimize").addEventListener("click",tempclick);
document.getElementById("maximise").addEventListener("click",tempclick);
document.getElementById("close").addEventListener("click",tempclick);
document.getElementById("start").addEventListener("click",tempclick);

document.getElementById("home").addEventListener("click",function(){changeURL("index.html")});
document.getElementById("myprojects").addEventListener("click",function(){changeURL("pages/construction.html")});
document.getElementById("devlogs").addEventListener("click",function(){changeURL("pages/construction.html")});
document.getElementById("reviews").addEventListener("click",function(){changeURL("pages/construction.html")});
document.getElementById("games").addEventListener("click",function(){changeURL("pages/games.html")});




function tempclick()
{
    alert("something");
}

function changeURL(newUrl)
{
    window.location.href = newUrl;
}


