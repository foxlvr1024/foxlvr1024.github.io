const btns = [];
const toggled = [];

let btn = document.getElementById("btn");
btn.addEventListener("click",Press);


for(let i=0;i<37;i++)
{
    let name = "btn"+(i+1).toString();
    btns.push(document.getElementById(name));
    toggled.push(Boolean(false));
    if(btns[i] instanceof HTMLElement)
    {
        btns[i].addEventListener("click",function(){Switch(i)});
        btns[i].addEventListener("mouseenter",function(){Hover(i)});
        btns[i].addEventListener("mouseleave",function(){Unhover(i)});
    }
}


function Switch(index)
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
            btns[index].style.backgroundColor = "maroon";
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
            btns[index].style.backgroundColor = "maroon";
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
            btns[index].style.backgroundColor = "red";
        }
        else
        {
            btns[index].style.backgroundColor = "white";
        }
    }
}



function Press()
{
    if(Check())
    {
        document.getElementById("p").innerHTML="";
    }
    else
    {
        document.getElementById("p").innerHTML="Number of selected numbers must be 7";
    }
}

function Check()
{
    let br = 0;
    for(let i=0;i<37;i++)
    {
        if(toggled[i])
        {
            br++;
        }
    }

    if(br<7)
    {
        return false;
    }
    if(br>7)
    {
        return false;
    }
    return true;
}