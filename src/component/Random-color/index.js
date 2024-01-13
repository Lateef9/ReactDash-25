import React, { useState } from 'react'

function Randomcolor() {
    const [color, setcolor] = useState("#000000")
    const [typeofColor, settypeofColor] = useState("hex")

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
      }
      

    function handleGenerateHEXColor() {
        const hex =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#";

        for(let i =0; i<6 ; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setcolor(hexColor)
        
    }

    function handleGenerateRGBColor() {
            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);
        
            setcolor(`rgb(${r},${g}, ${b})`);
          
        
    }


  return (
    <div>
        <div style={{
             width: "100vw",
             height: "100vh",
             background: color,
            }}>
                <div className='flex gap-6 items-center justify-center'>
                    <button className='text-white p-2 rounded-lg bg-yellow-500' onClick={() => settypeofColor("hex")}> create HEX color</button>
                    <button className='text-white p-2 rounded-lg bg-yellow-500' onClick={() => settypeofColor("rgb")}>create RGB color</button>
                    <button className='text-white p-2 rounded-lg bg-yellow-500' 
                    onClick={
                        typeofColor === "hex" ? handleGenerateHEXColor : handleGenerateRGBColor
                    }>generate Random color</button>

                </div>
                <div className='flex items-center justify-center my-auto'>
                    <h3 className='text-white text-lg'>{typeofColor === "hex" ? "HEX COLOR" : "RGB COLOR"}- {color}</h3>
                </div>

        </div>
    </div>
  )
}

export default Randomcolor