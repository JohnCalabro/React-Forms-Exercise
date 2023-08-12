import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm"
import Box from "./Box"


const BoxList = () => {
    const INITIAL_STATE = [{
        id: uuid(),
        backgroundColor: "",
        width: "",
        height: ""
    }]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
        function addBox (newBox){
        setBoxes(boxes => [...boxes, {...newBox}])
        }

        function destroy(target){
            // array.filter(stooge => stooge !== 'Hal')
            // let newBoxes = boxes.filter(box => box !== target)
            console.log(boxes)
            
            
            console.log(boxes.filter(b => b.id !== target))

            for(let b of boxes){
                console.log(b.backgroundColor !== target)
            }
           
            setBoxes(boxes.filter(b => b.backgroundColor !== target))
            

            // setNums(nums.filter(n => n !== num))

        }
    return (
        <div>
            <h1>Box List</h1>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({id, backgroundColor, width, height}) => <Box id={id}backgroundColor={backgroundColor} width={width} height={height} destroy={destroy} />)} 
            

            </div>
           
                
        </div>
    )
    
}




export default BoxList;