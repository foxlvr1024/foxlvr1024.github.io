
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
        newDiv.style.display = "inline-flex";
        newDiv.style.backgroundColor = "cyan";
        newDiv.style.width = "auto";
        newDiv.style.height = "auto";
        newDiv.style.margin = "2.5%";
        newDiv.style.padding = "0";
        newDiv.style.alignItems = "center";
        if(i%2==0)
        {
            newDiv.style.backgroundColor = "magenta";
        }

        const Text = document.createElement("p");
        Text.style.backgroundColor = "red";
        Text.style.width = "70%";
        Text.style.height = "100%";
        Text.style.margin = "0";
        

        const BtnPlus = document.createElement("btn");
        BtnPlus.style.backgroundColor = "green";
        BtnPlus.style.width = "10%";
        //BtnPlus.style.height = "100%";
        BtnPlus.style.aspectRatio = "1/1";
        BtnPlus.style.margin = "2.5px";
        BtnPlus.style.borderRadius = "50%";

        const BtnMinus = document.createElement("btn");
        BtnMinus.style.backgroundColor = "blue";
        BtnMinus.style.width = "10%";
        //BtnMinus.style.height = "0";
        BtnMinus.style.aspectRatio = "1/1";
        //BtnMinus.style.marginBottom = "10%";
        //BtnMinus.style.margin = "5px";
        
        //BtnMinus.style.paddingBottom = "5%";
        //BtnMinus.style.paddingTop = "5%";
        
        BtnMinus.style.margin = "2.5px";
        BtnMinus.style.borderRadius = "50%";
        

        const Counter = document.createElement("p");
        Counter.style.backgroundColor = "yellow";
        Counter.style.width = "10%";
        Counter.style.height = "100%";
        Counter.style.margin = "0";

        newDiv.appendChild(Text);
        newDiv.appendChild(BtnPlus);
        newDiv.appendChild(BtnMinus);
        newDiv.appendChild(Counter);
        
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