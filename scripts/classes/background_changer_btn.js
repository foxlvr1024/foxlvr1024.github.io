


function Start()
{
    const newDiv = document.createElement("btn");
    newDiv.style.zIndex = "3";
    newDiv.style.width = "50px";
    newDiv.style.height = "50px";
    newDiv.style.margin = "0";
    newDiv.style.padding = "0";

    newDiv.style.position = "absolute";
    newDiv.style.right = "1dvw";
    newDiv.style.top = "1dvh";
    newDiv.style.backgroundColor = "green";

    newDiv.addEventListener("click",function(){Open()});
    newDiv.style.cursor = "pointer";

    document.body.insertBefore(newDiv,document.body.childNodes[0]);
}

function Open()
{
    alert("hehe xd");
}

Start();