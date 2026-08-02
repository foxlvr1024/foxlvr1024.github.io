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
        //newDiv.style.margin = "auto";
        //newDiv.style.marginTop = "50%";
        //newDiv.style.verticalAlign = "middle";
        /*
        #position: absolute;
        #top: 50%;
        */
        
        return newDiv;
    }


}

class Box extends Shape{

    constructor(size, color)
    {
        super(color);
        this.size=size;
    }
    getShape()
    {
        const newDiv = super.getShape();
        newDiv.style.width = this.size;
        newDiv.style.height = this.size;
        return newDiv;
    }
}

class Rectangle extends Box{
    constructor(width,height,color)
    {
        super(width,color);
        this.height = height;
    }
    getShape()
    {
        const newDiv = super.getShape();
        newDiv.style.height = this.height;
        return newDiv;
    }
}

function maintest()
{
    const shape = new Rectangle("100px","200px","green")
    document.body.insertBefore(shape.getShape(),document.body.childNodes[0]);
}



maintest();