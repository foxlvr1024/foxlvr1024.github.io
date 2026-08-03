class Shape{
    
    constructor(color)
    {
        this.color = color;
        this.setBorder("0px");
        this.setBorderColor("black");
        
    }

    getShape()
    {
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = this.color;
        newDiv.style.width = "50px";
        newDiv.style.height = "50px";
        
        //newDiv.style.borderWidth = "thick";
        //newDiv.style.borderStyle = "solid";
        newDiv.style.borderTop = this.border_top + " solid " + this.border_color_top;
        newDiv.style.borderBottom = this.border_bottom + " solid " + this.border_color_bottom;
        newDiv.style.borderLeft = this.border_left + " solid " + this.border_color_left;
        newDiv.style.borderRight = this.border_right + " solid "+ this.border_color_right;


        newDiv.style.borderTopLeftRadius = this.corner_topleft;
        newDiv.style.borderTopRightRadius = this.corner_topright
        newDiv.style.borderBottomLeftRadius = this.corner_bottomleft;
        newDiv.style.borderBottomRightRadius = this.corner_bottomright;
        
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
    /*setBorder(size)
    {
        this.border_top = size;
        this.border_bottom = size;
        this.border_left = size;
        this.border_right = size;
    }*/
    setBorder(size_top, size_bottom, size_left, size_right)
    {
        if(typeof size_bottom !== "undefined")
        {
            this.border_top = size_top;
            this.border_bottom = size_bottom;
            this.border_left = size_left;
            this.border_right = size_right;
        
        }
        else
        {
            this.border_top = size_top;
            this.border_bottom = size_top;
            this.border_left = size_top;
            this.border_right = size_top;
        }
    }
    setBorderColor(color_top,color_bottom,color_left,color_right)
    {
        if(typeof color_bottom !== "undefined")
        {
            this.border_color_top = color_top;
            this.border_color_bottom = color_bottom;
            this.border_color_left = color_left;
            this.border_color_right = color_right;
            
        }
        else
        {
            this.border_color_top = color_top;
            this.border_color_bottom = color_top;
            this.border_color_left = color_top;
            this.border_color_right = color_top;
        }
    }
    setCorners(radius)
    {
        this.corner_topleft = radius;
        this.corner_topright = radius;
        this.corner_bottomleft = radius;
        this.corner_bottomright = radius;
           
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

class Circle extends Box{
    constructor(size,color)
    {
        super(size,color);
        
        this.setCorners("50%");
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
    const shape = new Circle("250px","blue");
    shape.setBorder("25px","25px","25px","25px");
    shape.setBorderColor("transparent","#ff0000","#ff0000","#ff0000");
    document.body.insertBefore(shape.getShape(),document.body.childNodes[0]);
}



maintest();