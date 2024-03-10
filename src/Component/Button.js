
import './Button.css';

const Button = (props)=>{

    return(
        <>
        <button 
        style={{backgroundColor: props.bgColor}}
        onClick={props.onClick}
        >
            {props.children}
        </button>
        </>
    )
}

export default Button;