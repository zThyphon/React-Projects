import { useState } from "react";
import AmountInput from "../UI/AmountInput";
import ConvertBox from "./ConvertBox";
import "./Form.css";

const Form = props =>{
    const [amount, setAmount] = useState(1);

    //Sets state accordingly user input
    const amountChangeHandler = (event) => 
    {  
        //get user input
        const amountInput = event.target.value;
        //set state
        setAmount(amountInput);
    };

    return (
        <form className="form">
            <AmountInput amountChangeHandler={amountChangeHandler} amountValue={amount} />
            <ConvertBox amount={amount} />
        </form>
    );
};


export default Form;