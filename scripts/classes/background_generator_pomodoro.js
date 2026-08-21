const background = new Rectangle("100dvw","100dvh","green");
const highlight_1 = new Circle("0px","green");
const highlight_2 = new Circle("0px","red");

const col_bg = [];
const col_hl1 = [];
const col_hl2 = [];

col_bg.push("#7D8E95, #344648 75%");
col_hl1.push("#FFBB98");
col_hl2.push("#FBE0C3");

col_bg.push("#94A7AE, #64766A 75%");
col_hl1.push("#C0A9BD");
col_hl2.push("#F4F2F3");

col_bg.push("#2A403D, #D05663 75%");
col_hl1.push("#748B6F");
col_hl2.push("#C3CBD6");

col_bg.push("#888870, #712E1E 75%");
col_hl1.push("#E59A59");
col_hl2.push("#FFD5AF");

col_bg.push("#E59560, #1D3124 75%");
col_hl1.push("#BACEC1");
col_hl2.push("#F6F4E8");

col_bg.push("#E0475B, #192F01 75%");
col_hl1.push("#DED369");
col_hl2.push("#F8EFEA");

col_bg.push("#9F496E, #2B262D 75%");
col_hl1.push("#647295");
col_hl2.push("#F2EBE5");

col_bg.push("#B3DEE5, #31525B 75%");
col_hl1.push("#FFA101");
col_hl2.push("#FAE6B1");

col_bg.push("#C34F5A, #541412 75%");
col_hl1.push("#D69F3A");
col_hl2.push("#F8D4BA");

col_bg.push("#788402, #342628 75%");
col_hl1.push("#FEAA00");
col_hl2.push("#F7F4EF");

col_bg.push("#3D5A5B, #2F365F 75%");
col_hl1.push("#FEBEB0");
col_hl2.push("#F7F1ED");

col_bg.push("#8CA9D3, #F26659 75%");
col_hl1.push("#EBC999");
col_hl2.push("#F0EFF4");

col_bg.push("#FEDD89, #31383F 75%");
col_hl1.push("#DD8EA4");
col_hl2.push("#F2E9EB");

col_bg.push("#596235, #2F3020 75%");
col_hl1.push("#D96846");
col_hl2.push("#CDCBD6");

col_bg.push("#8CBDB9, #2D3E4E 75%");
col_hl1.push("#E09E50");
col_hl2.push("#E8ECEB");

col_bg.push("#013328, #100C0D 75%");
col_hl1.push("#CC8B65");
col_hl2.push("#E3DCD2");

col_bg.push("#B74803, #022E51 75%");
col_hl1.push("#CC6D3D");
col_hl2.push("#A3B4C8");

col_bg.push("#178CA4, #072A40 75%");
col_hl1.push("#18B7BE");
col_hl2.push("#F9F7F0");

col_bg.push("#3D4E17, #151F1E 75%");
col_hl1.push("#C7A003");
col_hl2.push("#EDE599");

col_bg.push("#FFB400, #FF6C02 75%");
col_hl1.push("#5A8100");
col_hl2.push("#FFF9E9");

col_bg.push("#0A62D0, #191718 75%");
col_hl1.push("#F3D849");
col_hl2.push("#E0E5E9");

col_bg.push("#68020F, #030303 75%");
col_hl1.push("#F21137");
col_hl2.push("#FFFFFE");

col_bg.push("#AA210F, #41403C 75%");
col_hl1.push("#D08856");
col_hl2.push("#EDEFEE");

col_bg.push("#FCD752, #6184C6 75%");
col_hl1.push("#FCA3B9");
col_hl2.push("#F6F4F9");

col_bg.push("#687477, #403234 75%");
col_hl1.push("#E2C2B3");
col_hl2.push("#F7F3F5");

col_bg.push("#18ACBA, #F76566 75%");
col_hl1.push("#FFA998");
col_hl2.push("#FFC397");

col_bg.push("#A15C38, #262220 75%");
col_hl1.push("#C3A6A0");
col_hl2.push("#F7F1F0");

col_bg.push("#D67940, #6F4849 75%");
col_hl1.push("#285185");
col_hl2.push("#CCD9E2");


function setBackground(index)
{
    //console.log(background.getShape());
    //console.log(document.body.contains(background.getShape()));
    
    for(let i=0;i<document.body.children.length;i++)
    {
        if(document.body.childNodes[i].isEqualNode(background.getShape()) || document.body.childNodes[i].isEqualNode(highlight_1.getShape()) ||document.body.childNodes[i].isEqualNode(highlight_2.getShape())) 
        {
            //console.log("removed");
            document.body.removeChild(document.body.childNodes[i]);
            i--;
        }
        
    }
    background.setZIndex("1");
    background.setRadGradient("circle",col_bg[index]);
    //document.body.insertBefore(background.getShape(),document.body.childNodes[0]);
    highlight_1.setZIndex("2");
    highlight_1.setShadow("0px","0px","200px","100px",col_hl1[index]);
    highlight_1.setPosition("25dvw","0","20dvh","0");
    highlight_2.setZIndex("2");
    highlight_2.setShadow("0px","0px","150px","50px",col_hl2[index]);
    highlight_2.setPosition("auto","24dvw","auto","20dvh");
    //document.body.insertBefore(highlight_2.getShape(),document.body.childNodes[0]);
    
    //console.log(background_node);
    document.body.insertBefore(background.getShape(),document.body.childNodes[0]);
    document.body.insertBefore(highlight_1.getShape(),document.body.childNodes[0]);
    document.body.insertBefore(highlight_2.getShape(),document.body.childNodes[0]);

}

//setBackground(27);


//setBackground(15);
