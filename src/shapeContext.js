///<reference path="./Lib/jquery-3.4.1.min.js"/>

import parentShape from "./parentShape";
import childClassCircle from "./childClassCircle";
import childClassSquare from "./childClassSquare";
import childClassRectangle from "./childClassRectangle";


export default class shapeContext{

      static async drawShape(strShape){

        let parentShapeObj=null;
           


        try{

            return await new Promise((resolve)=>{

                // Create an instance of a parent class shape

                parentShapeObj=new parentShape(); // Parent

                if(strShape=="Circle")
                {
                    console.log("Circle true")
                    parentShapeObj=new childClassCircle();
                    
                }

                else if(strShape=="Square")
                {
                    parentShapeObj=new childClassSquare();
                }

                else if(strShape=="Rectangle")
                {
                    parentShapeObj=new childClassRectangle();
                }

                return resolve(parentShapeObj.drawShape());




            });

        }
        catch(ex){
            throw ex;
        }
      }




}