let grid = document.getElementById("grid");
const btns = [];
const toggled = [];
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
            let br = i*34+j;
            str+= "<div class=\"cell\" id = \""+br.toString()+"\"></div>\n";
            //console.log(str);
        }
    }
    //console.log(str);
    grid.style.gridTemplateColumns = display;
    grid.innerHTML = str;

    for(let i=0;i<63;i++)
    {
        
        for(let j=0;j<34;j++)
        {
            toggled.push(false);
            let br = i*34+j;
            btns.push(document.getElementById(br.toString()));
            document.getElementById(br.toString()).addEventListener("click",function(){Click(br)});
            document.getElementById(br.toString()).addEventListener("mouseenter",function(){Hover(br)});
            document.getElementById(br.toString()).addEventListener("mouseleave",function(){Unhover(br)});
            
        }
    }

}


function Click(index)
{
    if(btns[index] instanceof HTMLElement)
    {
        //console.log(1);
        if(toggled[index])
        {
            btns[index].style.backgroundColor = "gray";
        }
        else
        {
            btns[index].style.backgroundColor = "#222222";
        }
        toggled[index] = !toggled[index];
    }
}

function Hover(index)
{
    if(btns[index] instanceof HTMLElement)
    {
        //console.log(2);
        if(toggled[index])
        {
            btns[index].style.backgroundColor = "#222222";
        }
        else
        {
            btns[index].style.backgroundColor = "gray"; 
        }
    }
}

function Unhover(index)
{
    if(btns[index] instanceof HTMLElement)
    {
        //console.log(3);
        if(toggled[index])
        {
            btns[index].style.backgroundColor = "black";
        }
        else
        {
            btns[index].style.backgroundColor = "white";
        }
    }
}