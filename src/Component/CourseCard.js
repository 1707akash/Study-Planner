
import React, {useState} from "react";
import Button from "./Button";
import './CourseCard.css'


const CourseCard =({name, hour, key})=>{

    let [hourValue, updateHourValue] = useState(hour);

    return(
        <>
               <div  style={{color:'red' , backgroundColor:"yellow", padding:'0.5rem', margin:'1rem', display:'inline-block'}} key={key}>
                <p>Course Name: {name}</p>
                <p>Study Hours: {hourValue}</p>
                <div className="btns">
                <Button bgColor="#0000ff" onClick={()=>{updateHourValue(hourValue+1)}}>+</Button>
                <Button bgColor="#00ff00"  onClick={()=>{updateHourValue(hourValue-1)}}>-</Button>
                </div>
                </div>
                
                


        </>
    )
}

export default CourseCard;
