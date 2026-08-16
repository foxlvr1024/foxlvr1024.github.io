const background = new Rectangle("100dvw","100dvh","green");





function setBackground()
{
    background.setZIndex("1");
    background.setRadGradient("#7D8E95, #344648 75%");
    document.body.insertBefore(background.getShape(),document.body.childNodes[0]);
}



setBackground();