let grid = document.getElementById("grid");
const btns = [];
const toggled = [];
Start();
document.getElementById("reset").addEventListener("click",Reset);
document.getElementById("step").addEventListener("click",Step);
function Start()
{
    let str = "";
    let display = "";
    for(let i=0;i<63;i++)
    {
        display+="24px ";
    }
    for(let i=0;i<34;i++)
    {
        
        for(let j=0;j<63;j++)
        {
            let br = i*63+j;
            str+= "<div class=\"cell\" id = \""+br.toString()+"\"></div>\n";
            //console.log(str);
        }
    }
    //console.log(str);
    grid.style.gridTemplateColumns = display;
    grid.innerHTML = str;

    for(let i=0;i<34;i++)
    {
        
        for(let j=0;j<63;j++)
        {
            toggled.push(false);
            let br = i*63+j;
            console.log(br);
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
        console.log(index);
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


function Reset()
{
    for(let i=0;i<34;i++)
    {
        
        for(let j=0;j<63;j++)
        {
            
            let br = i*63+j;
            toggled[br]=false;
            btns[br].style.backgroundColor = "white";
        }
    }
}


function Step()
{
    const pom = [];
    for(let i=0;i<34;i++)
    {
        
        for(let j=0;j<63;j++)
        {
            
            let br = i*63+j;
            let up = ((i+33)%34)*63+j;
            let down = ((i+1)%34)*63+j;
            let right = i*63 + ((j+1)%63);
            let left = i*63 + ((j+62)%63);
            let lu = ((i+33)%34)*63 + ((j+62)%63);
            let ld = ((i+1)%34)*63 + ((j+62)%63);
            let ru = ((i+33)%34)*63 + ((j+1)%63);
            let rd = ((i+1)%34)*63 + ((j+1)%63);
            let num = 0;
            if(toggled[up]) num++;
            if(toggled[down]) num++;
            if(toggled[left]) num++;
            if(toggled[right]) num++;
            if(toggled[lu]) num++;
            if(toggled[ld]) num++;
            if(toggled[ru]) num++;
            if(toggled[rd]) num++;
            
            console.log(br+"-"+num);
            if(!(toggled[br]) && num == 3) pom.push(true);
            else if(toggled[br] && num>1 && num<4) pom.push(true);
            else pom.push(false);
        }
    }

    for(let i=0;i<34;i++)
    {
        
        for(let j=0;j<63;j++)
        {
            
            let br = i*63+j;
            toggled[br]=pom[br];
            if(toggled[br]) btns[br].style.backgroundColor = "black"; 
            else btns[br].style.backgroundColor = "white";
        }
    }

}