
    const Button = document.createElement("btn");
const Overlay = document.createElement("div");

function Start()
{
    Button.style.zIndex = "3";
    Button.style.width = "50px";
    Button.style.height = "50px";
    Button.style.margin = "0";
    Button.style.padding = "0";

    Button.style.position = "absolute";
    Button.style.right = "1dvw";
    Button.style.top = "1dvh";
    Button.style.backgroundColor = "green";

    Button.addEventListener("click",function(){Open()});
    Button.style.cursor = "pointer";

    Button.style.display = "block";
    document.body.insertBefore(Button,document.body.childNodes[0]);

    Overlay.style.zIndex = "10";
    Overlay.style.width = "100dvw";
    Overlay.style.height = "100dvh";
    Overlay.style.margin = "0";
    Overlay.style.padding = "0";
    Overlay.style.position = "absolute";
    Overlay.style.backgroundColor = "#00000080";

    Overlay.addEventListener("click",function(){Close()});
    Overlay.style.cursor = "pointer";

    Overlay.style.display = "none";
    document.body.insertBefore(Overlay,document.body.childNodes[0]);
}

function Open()
{
    //alert("hehe xd");
    Overlay.style.display = "block";
}

function Close()
{
    Overlay.style.display = "none";
}

Start();