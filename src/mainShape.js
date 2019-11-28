import shapeContext from "./shapeContext";

const _strShape=Symbol("_strShape");

export default class mainShape{

    constructor(strShape){
        this[_strShape]=strShape;
    }

        
        async onSubmit() {
            let shape = undefined;
            try {
    
                return await new Promise(async (resolve) => {
    
                    shape = await shapeContext.drawShape(this[_strShape]);

                    
                });
    
            }
            catch (ex) {
                console.log(ex.message);
                console.log(ex.stack);
            }
        }
    
    }

export function onCircleButtonClickEvent()
{
    let strCircle="Circle";
    try{
        let  shapeMainObj=new mainShape(strCircle);

        shapeMainObj
        .onSubmit()
        .then((resolve)=>console.log(resolve));

    }

    catch(ex){
        console.log(ex.message);
        console.log(ex.stack);
    }
}
export function onSquareButtonClickEvent()
{
    let strSquare="Square";
    try{
        let  shapeMainObj=new mainShape(strSquare);

        shapeMainObj
        .onSubmit()
        .then((resolve)=>console.log(resolve));

    }

    catch(ex){
        console.log(ex.message);
        console.log(ex.stack);
    }
}

export function onRectangleButtonClickEvent()
{
    let strRectangle="Rectangle";
    try{
        let  shapeMainObj=new mainShape(strRectangle);

        shapeMainObj
        .onSubmit()
        .then((resolve)=>console.log(resolve));

    }

    catch(ex){
        console.log(ex.message);
        console.log(ex.stack);
    }
}

