import "./Button.css";  

const Button = props =>{
    return (
        <button className="button" onClick={props.fetchDataHandler}>{props.text}</button>
    );
};

export default Button;