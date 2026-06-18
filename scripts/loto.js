const btns = [];


for(let i=0;i<37;i++)
{
    let name = "btn"+(i+1).toString();
    btns.push(document.getElementById(name));
    if(btns[i] instanceof HTMLElement)
        btns[i].addEventListener("click",function(){Switch(i)});
}


function Switch(index)
{
    
    if(btns[index] instanceof HTMLElement)
        btns[index].style.backgroundColor = "red";
}