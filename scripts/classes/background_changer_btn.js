/*
#81717A
#9D8CA1
#9993B2
#A7ABDD
#B4D4EE
*/
const Button = document.createElement("btn");
const Overlay = document.createElement("div");
const Themes = document.createElement("div");
function Start()
{
    Button.style.zIndex = "3";
    Button.style.width = "50px";
    Button.style.height = "50px";
    Button.style.margin = "0";
    Button.style.padding = "0";
    Button.style.borderRadius = "50%";
    Button.style.backgroundImage = "radial-gradient( #A7ABDD90 , #9993B290 70%)";
    Button.style.boxShadow = "0px 5px 10px 1px #22222280";
    Button.style.position = "absolute";
    Button.style.right = "1dvw";
    Button.style.top = "1dvh";
    Button.style.backgroundColor = "green";
    Button.style.transition = "all 0.2s";

    Button.addEventListener("click",function(){Open()});
    Button.addEventListener("mouseover",function(){
            //console.log("in");
            //Button.style.width = "48px";
            //Button.style.height ="48px";
            Button.style.backgroundImage = "radial-gradient( #9993B290 , #9D8CA190 70%)";
            Button.style.boxShadow = "0px 5px 10px 1px #222222A0";
            //btn.style.border = "7px solid #9993B2";
        });
    Button.addEventListener("mouseout",function(){
            //console.log("out");
            //Button.style.width = "50px";
            //Button.style.height ="50px";
            Button.style.backgroundImage = "radial-gradient( #A7ABDD90 , #9993B290 70%)";
            Button.style.boxShadow = "0px 5px 10px 1px #22222280";
            //btn.style.border = "5px solid #B4D4EE";
        });
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
    Overlay.style.backdropFilter = "blur(13.2px)";

    Overlay.addEventListener("click",function(){Close()});
    Overlay.style.cursor = "pointer";

    Overlay.style.display = "none";
    document.body.insertBefore(Overlay,document.body.childNodes[0]);

    Themes.style.zIndex = "11";
    Themes.style.width = "420px";
    Themes.style.height = "auto";
    Themes.style.position = "absolute";
    Themes.style.right = "5dvw";
    Themes.style.top = "3dvh";
    Themes.style.bottom = "3dvh";
    Themes.style.display = "none";
    Themes.style.backgroundColor = "none";
    Themes.style.gridTemplateColumns = "auto auto auto";
    Themes.style.padding = "10px";
    Themes.style.borderRadius = "15px";
    Themes.style.backgroundImage = "radial-gradient( #A7ABDD90 , #9993B290 70%)";
    Themes.style.border = "4px solid #81717A";
    Themes.style.backdropFilter = "blur(13.2px)";
    Themes.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    //Themes.style.content = "center";
    for(let i=0;i<28;i++)
    {
        const btn = document.createElement("btn");
        btn.style.width = "75px";
        btn.style.height ="75px";
        btn.style.backgroundColor ="red";
        btn.style.margin = "auto";
        btn.style.borderRadius = "50%";
        btn.style.border = "5px solid #B4D4EE";
        btn.style.backgroundImage = "radial-gradient(" + col_bg[i]+")"
        btn.style.cursor = "pointer";
        btn.style.transition = "all 0.2s";
        btn.addEventListener("click",function(){setBackground(i)});
        btn.addEventListener("mouseover",function(){
            //console.log("in");
            btn.style.width = "71px";
            btn.style.height ="71px";
            btn.style.border = "7px solid #9993B2";
        });
        btn.addEventListener("mouseout",function(){
            //console.log("out");
            btn.style.width = "75px";
            btn.style.height ="75px";
            btn.style.border = "5px solid #B4D4EE";
        });
        //btn.style.position ="relative";
        Themes.appendChild(btn);
    }

    document.body.insertBefore(Themes,document.body.childNodes[0]);
}

function Open()
{
    //alert("hehe xd");
    Overlay.style.display = "block";
    Themes.style.display = "grid";
}

function Close()
{
    Overlay.style.display = "none";
    Themes.style.display = "none";
}

Start();