class Shape{
    
    constructor(color)
    {
        this.color = color;
    }

    getShape()
    {
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = this.color;
        newDiv.style.width = "50px";
        newDiv.style.height = "50px";
        
        return newDiv;
    }


}


function maintest()
{
    const shape = new Shape("maroon");
    document.body.insertBefore(shape.getShape(),document.body.childNodes[0]);
}



maintest();