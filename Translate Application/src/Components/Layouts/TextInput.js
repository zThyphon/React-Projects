import "./TextInput.css";
import TextArea from "../UI/TextArea";
import { useSelector } from "react-redux";

const TextInput = props => {
    //Get country texts 
    const currentCountryText = useSelector((state) => state.currentCountryText);
    const targetCountryText = useSelector((state) => state.targetCountryText);

    return (
        <div className="text-input">
            <TextArea 
                direction="from" 
                placeholder="Enter text" 
                text={currentCountryText}
            ></TextArea>
            <TextArea 
                direction="to" 
                placeholder="Translation" 
                isReadOnly={true}
                text={targetCountryText}
            ></TextArea>
        </div>
    );
};

export default TextInput;