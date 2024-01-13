import { useState } from "react";
import { FaStar } from "react-icons/fa6";

function StarRating({countOfStars = 10}){

    const [rating, setrating] =useState(0)
    const [hover, sethover] = useState(0)

    function handleOnclick(getCurrentIndex){
        setrating(getCurrentIndex)
    }
    function onMouseMove(getCurrentIndex){
        sethover(getCurrentIndex)
    }
    function onMouseLeave(getCurrentIndex){
        sethover(rating)
    }

    return(
        <div className="flex mx-auto my-8 justify-center">

        {[...Array(countOfStars)].map((_,index) =>{

            index += 1;
            return(
                <FaStar 
                className= {index <= (hover || rating) ? "bg-yellow-400  size-20": "bg-white size-20" }
                onClick={() => handleOnclick(index)}
                onMouseMove={() => onMouseMove(index)}
                onMouseLeave={() => onMouseLeave(index)}

                />
            )

        })}

        </div>
    )
}

export default StarRating;