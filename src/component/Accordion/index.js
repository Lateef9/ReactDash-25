import React from 'react'
import { useState } from 'react'
import data from './data';

function Accordian() {

    const [Selected,setSelected] = useState(null);
    
    function handleSingleSelection(currentId){
        setSelected(currentId)
    }

  return (
    <div className='max-w-[50%] mx-auto'>
        {data.map((dataItem,index) =>(
        <div>
        <div className='flex p-1 bg-yellow-200 justify-between cursor-pointer'  onClick={() => handleSingleSelection(dataItem.id)} key={index}>
            <h3>{dataItem.question}</h3>
            <span>+</span>
        </div>
        {Selected === dataItem.id  ? <div>{dataItem.answer}</div> : null}
        </div>
        )
        )}
    </div>
  )
}

export default Accordian