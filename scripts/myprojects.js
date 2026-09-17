const games = [];
let cards = document.getElementById("cards");
let index = 0;

for(let i=0;i<cards.childElementCount;i++)
{
    games.push(cards.children[i]);
    if(games[i] instanceof HTMLElement)
    {
        games[i].style.display = "none";
    }
}


window.addEventListener("resize",Update);
document.getElementById("leftbtn").addEventListener("click",function(){
    ChangeIndex(-1);
});
document.getElementById("rightbtn").addEventListener("click",function(){
    ChangeIndex(1);
});



function ChangeIndex(value)
{
    if(index+value>=0 && index+value<=games.length-3)
    {
        index+=value;
        Update();
    }
}



function Update()
{
    
    if(window.innerWidth<=768)
    {
        for(let i=0;i<games.length;i++)
        {
            games[i].style.display = "flex";
        }
    }
    else
    {
        for(let i=0;i<games.length;i++)
        {
            games[i].style.display = "none";
        }
        games[index].style.display = "flex";
        games[index+1].style.display = "flex";
        games[index+2].style.display = "flex";
    }
}



Update();