let btn = document.getElementById("coin_button");
let lbl_count = document.getElementById("count");
let lbl_chance = document.getElementById("chance");
let lbl_highscore = document.getElementById("highscore");

// btn.addEventListener("mouseenter",Hover);
// btn.addEventListener("mouseleave",Unhover);
//btn.addEventListener("mousedown",Press);
btn.addEventListener("mouseup",Unpress);

let click = new Audio("../sounds/click.mp3");
let fail = new Audio("../sounds/fail.mp3");


let count = 0;
let highscore=Load();
UpdateLabels();
function Chance()
{
    let chance = Math.trunc(count/5);
    chance++;
    chance*=5;
    return chance; 
}

function Flip()
{
    let val = Math.round(Math.random()*100);
    console.log(val);
    if(val>Chance()) return true;
    return false;
}

function Unpress()
{
    
    if(Flip())
    {
        if (click.duration > 0 && !click.paused) {
            click.pause();
            click.currentTime=0;
        }
        click.play();
        count++;
    }
    else
    {
        fail.play();
        count=0;
    }
    highscore = Math.max(highscore,count);
    localStorage.setItem("highscore",highscore);
    UpdateLabels();
    //btn.style.background = "radial-gradient( 100% 100% at 100% 0%, #FE2020 0%, #B118C8 100% )";
    
}

function UpdateLabels()
{
    lbl_highscore.innerHTML = highscore;
    lbl_count.innerHTML = count;
    lbl_chance.innerHTML = Chance() + "%";
}



function Load()
{
    let save = localStorage.getItem("highscore");
    if(save==null)
    { 
        return 0;
    }
    return Number(save);
}







// function Hover()
// {
//     //btn.style.background = "radial-gradient( 100% 100% at 100% 0%, #FE2020 0%, #B118C8 100% )";
//     //btn.style.boxShadow = "0 16px 32px 0 rgba(0,0,0,0.9)";
    
// }

// function Unhover()
// {
//     //btn.style.background = "radial-gradient( 100% 100% at 100% 0%, #FF3377 0%, #FE4A49 100% )";
//     //btn.style.backgroundColor = "red";
//     //btn.style.boxShadow = "0 16px 32px 0 rgba(0,0,0,0.6)";
// }

// function Press()
// {
//     //btn.style.background = "radial-gradient( 100% 100% at 100% 0%, #710F80 0%, #0E0004 100% )";
// }
