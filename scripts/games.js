



document.getElementById("flipcoin").addEventListener("click",function(){changeURL("flip_coin.html")});
document.getElementById("flipcoin").style.cursor = "pointer";

document.getElementById("loto").addEventListener("click",function(){changeURL("loto.html")});
document.getElementById("loto").style.cursor = "pointer";



function changeURL(newUrl)
{
    window.location.href = newUrl;
}