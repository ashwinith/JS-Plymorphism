import parentShape from "./parentShape";

export default class childClassSquare extends parentShape{

    //Ovrride
    drawShape()
    {
        //console.log("This is circle.");

       // document.writeln("Hi I am a Circle");

        document.getElementById("demo1").innerHTML="Hi I am Square";
        document.getElementById("demo2").innerHTML="<img src=../../../img/square.jpeg height=300 width=300>";

        
    }
}