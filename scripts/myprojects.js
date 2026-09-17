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