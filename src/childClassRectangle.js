import parentShape from "./parentShape";


export default class childClassRectangle extends parentShape{

    //Ovrride
    drawShape()
    {
        //console.log("This is circle.");

       // document.writeln("Hi I am a Circle");

        document.getElementById("demo1").innerHTML="Hi I am Rectangle";
        document.getElementById("demo2").innerHTML="<img src=../../../img/rectangle.jpeg height=300 width=500>";
        
    }
}