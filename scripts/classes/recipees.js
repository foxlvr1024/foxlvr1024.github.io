
const Container = document.createElement("div");

function Start()
{
    Container.style.zIndex = "5";
    Container.style.position = "absolute";
    Container.style.top = "20dvh";
    Container.style.bottom = "20dvh";
    Container.style.right = "20dvw";
    Container.style.left = "20dvw";
    Container.style.width = "auto";
    Container.style.height = "auto";
    Container.style.backgroundColor = "none";

    Container.style.backgroundImage = "radial-gradient( #A7ABDD50 , #9993B250 70%)";
    Container.style.border = "1px solid #81717A";
    Container.style.backdropFilter = "blur(5px)";
    Container.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    Container.style.borderRadius = "16px";
    Container.style.display = "grid";
    Container.style.gridTemplateColumns = "auto auto";

    for(let i=0;i<12;i++)
    {
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "cyan";
        newDiv.style.width = "auto";
        newDiv.style.height = "auto";
        newDiv.style.margin = "2.5%";
        if(i%2==0)
        {
            newDiv.style.backgroundColor = "magenta";
        }

        Container.appendChild(newDiv);
    }


    document.body.insertBefore(Container,document.body.childNodes[0]);




}


function Show()
{


}


function Hide()
{

}


Start();