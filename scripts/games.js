



document.getElementById("flipcoin").addEventListener("click",function(){changeURL("flip_coin.html")});
document.getElementById("flipcoin").style.cursor = "pointer";

function changeURL(newUrl)
{
    window.location.href = newUrl;
}