const btns = [];
const toggled = [];
const results = [];
const bg = [];
let btn = document.getElementById("btn");
btn.addEventListener("click",Press);

let lbl_highscore = document.getElementById("highscore");
let lbl_score = document.getElementById("score");


let click = new Audio("../sounds/click.mp3");
let fail = new Audio("../sounds/fail.mp3");

let highscore = Load();

lbl_highscore.innerHTML = Words(highscore);

for(let i=0;i<7;i++)
{
    let name = "result"+(i+1).toString();
    results.push(document.getElementById(name));
    let name2= "bg"+(i+1).toString();
    bg.push(document.getElementById(name2));
}
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
        if (click.duration > 0 && !click.paused) {
            click.pause();
            click.currentTime=0;
        }
        click.play();
        document.getElementById("p").innerHTML="";
        Randomise();
    }
    else
    {
        fail.play();
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

    if(br==7) return true;
    return false;
}

function Randomise()
{
    const nums = [];
    for(let i=0;i<7;i++)
    {
        let num = Math.trunc(Math.random()*37)+1;
        let bool=true;
        for(let j=i-1;j>-1;j--)
        {
            if(nums[j]==num)
            {
                bool=false;
            }
        }
        if(bool)
        {
            nums.push(num);
        }
        else
        {
            i--;
        }

    }
    nums.sort((a,b) => a-b);
    let br=0;
    for(let i=0;i<7;i++)
    {
        
        results[i].innerHTML=nums[i];
        if(toggled[nums[i]-1])
        {
            bg[i].style.backgroundColor = "lime";
            br++;
        }
        else
        {
            bg[i].style.backgroundColor = "white";
        }
        

    }
    highscore = Math.max(highscore,br);
    localStorage.setItem("loto_highscore",highscore);
        //console.log(Words(br));
    lbl_highscore.innerHTML = Words(highscore);
    lbl_score.innerHTML = Words(br);


}


function Words(num)
{
    switch(num)
    {
        case 0: return "0$ (0)";
        case 1: return "0$ (1)";
        case 2: return "0$ (2)";
        case 3: return "1.2$ (3)";
        case 4: return "12$ (4)";
        case 5: return "130$ (5)";
        case 6: return "7620$ (6)";
        case 7: return "JACKPOT";
        default: return "0$";
    }

}


function Load()
{
    let save = localStorage.getItem("loto_highscore");
    if(save==null)
    { 
        return 0;
    }
    return Number(save);
}
