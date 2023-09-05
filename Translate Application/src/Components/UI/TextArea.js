import React from "react";
import { useDispatch } from "react-redux";
import { translateActions } from "../../store/translate-slice";
import "./TextArea.css";


const TextArea = (props) => {
    const dispatch = useDispatch();
    const { direction, text } = props;
    
    /*
    This function changes currentCountryText in every key stroke accordingly
    entered text in the text area
    */
   
    const textChangeHandler = async (event) => {
        const newText = event.target.value;
        dispatch(
            translateActions.setTextValue({
                direction: props.direction,
                text: newText,
            })
        );
    };
    
    return (
        <textarea
            spellCheck="false"
            readOnly={props.isReadOnly}
            placeholder={props.placeholder}
            className={direction}
            value={text}
            onChange={textChangeHandler} // Add onChange event handler
        ></textarea>
    );
};

export default TextArea;
