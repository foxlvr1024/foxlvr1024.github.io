let grid = document.getElementById("grid");

Start();

function Start()
{
    let str = "";
    let display = "";
    for(let i=0;i<63;i++)
    {
        display += "24px ";
        for(let j=0;j<34;j++)
        {
            str+= "<div class=\"cell\"></div>\n";
        }
    }
    
    grid.style.gridTemplateColumns = display;
    grid.innerHTML = str;
}

