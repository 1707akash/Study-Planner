
import {useState} from "react";
import './Plan.css';
import CourseCard from "./CourseCard";

const Plan =()=>{
    const[planData, setStudyPlan] = useState([]);

    const onCLickHandler = ()=>{

        const courseName = document.getElementById("courseName").value ;
        const courseHours = document.getElementById("courseHours").value ;

        const newStudyPlan = {
            name: courseName,
            hour: parseInt(courseHours)
        }
        setStudyPlan([...planData, newStudyPlan]);
        

    }
    


    return(
        <>
        <h1>My Study Plan</h1>
        <input id="courseName" type="text" placeholder="Subject" />
        <input id="courseHours" type="number" placeholder="Hours" />
        <button onClick={onCLickHandler}>Add</button>
        <br />

        {
            planData.map((plan, index)=>(
                <CourseCard name={plan.name} hour={plan.hour} key={index}></CourseCard>
            ))
        }



        </>
    );
}

export default Plan;