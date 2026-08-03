class Shape{
    
    constructor(color)
    {
        this.color = color;
        this.setBorder("0px");
        this.setBorder("black");
    }

    getShape()
    {
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = this.color;
        newDiv.style.width = "50px";
        newDiv.style.height = "50px";
        
        //newDiv.style.borderWidth = "thick";
        //newDiv.style.borderStyle = "solid";
        newDiv.style.borderTop = this.border_top + " solid " + this.border_color;
        newDiv.style.borderBottom = this.border_bottom + " solid " + this.border_color;
        newDiv.style.borderLeft = this.border_left + " solid " + this.border_color;
        newDiv.style.borderRight = this.border_right + " solid "+ this.border_color;
        //newDiv.style.borderColor = this.border_color;


        /*alert(newDiv.style.borderWidth);
        alert(newDiv.style.borderStyle);
        alert(newDiv.style.borderColor);
        
        //newDiv.style.margin = "auto";
        //newDiv.style.marginTop = "50%";
        //newDiv.style.verticalAlign = "middle";
        /*
        #position: absolute;
        #top: 50%;
        */
        
        return newDiv;
    }
    setBorder(size)
    {
        this.border_top = size;
        this.border_bottom = size;
        this.border_left = size;
        this.border_right = size;
    }
    setBorder(size_top, size_bottom, size_left, size_right)
    {
        this.border_top = size_top;
        this.border_bottom = size_bottom;
        this.border_left = size_left;
        this.border_right = size_right;
    }
    setBorderColor(color)
    {
        this.border_color = color;
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
    shape.setBorder("5px","2px","0px","5px");
    shape.setBorderColor("yellow");
    document.body.insertBefore(shape.getShape(),document.body.childNodes[0]);
}



maintest();