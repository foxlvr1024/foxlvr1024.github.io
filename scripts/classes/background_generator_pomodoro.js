const background = new Rectangle("100dvw","100dvh","green");
const highlight_1 = new Circle("0px","green");
const highlight_2 = new Circle("0px","red");



function setBackground()
{
    background.setZIndex("1");
    background.setRadGradient("#7D8E95, #344648 75%");
    document.body.insertBefore(background.getShape(),document.body.childNodes[0]);
    highlight_1.setZIndex("2");
    highlight_1.setShadow("0px","0px","200px","100px","#FFBB98");
    highlight_1.setPosition("25dvw","0","20dvh","0");
    document.body.insertBefore(highlight_1.getShape(),document.body.childNodes[0]);
    highlight_2.setZIndex("2");
    highlight_2.setShadow("0px","0px","150px","50px","#FBE0C3");
    highlight_2.setPosition("auto","24dvw","auto","20dvh");
    document.body.insertBefore(highlight_2.getShape(),document.body.childNodes[0]);
}



setBackground();