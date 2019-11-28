import parentShape from "./parentShape";

export default class childClassCircle extends parentShape{

    //Ovrride
    drawShape()
    {
        //console.log("This is circle.");

       // document.writeln("Hi I am a Circle");

        document.getElementById("demo1").innerHTML="Hi I am Circle";

        document.getElementById("demo2").innerHTML="<img src=../../../img/circle.jpeg height=300 width=300>";
    }
}