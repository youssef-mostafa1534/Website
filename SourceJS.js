var Colour;

function colora()
{
    Colour = "A" ;
    document.getElementById('bd1').style.backgroundImage="linear-gradient(to bottom left, #FF5A00, #FFF707)";
}
function colorb()
{
    Colour = "N/A";
    document.getElementById('bd1').style.backgroundImage="linear-gradient(to bottom right, #05FF00, #0079BF)";
}
function change()
{
    if (Colour == "A")
    {
        colorb();
    }
    else
    {
        colora();
    }
}
var Colour;

function colora()
{
    Colour = "A" ;
    document.getElementById('bd').style.backgroundImage="linear-gradient(to bottom left, #FF5A00, #FFF707)";
}
function colorb()
{
    Colour = "N/A";
    document.getElementById('bd').style.backgroundImage="linear-gradient(to bottom right, #05FF00, #0079BF)";
}
function change()
{
    if (Colour == "A")
    {
        colorb();
    }
    else
    {
        colora();
    }
}