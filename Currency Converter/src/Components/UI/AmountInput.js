import "./AmountInput.css";

const AmountInput = props =>{

    return (
        <div className="amount">
            <p>Amount</p>
            <input 
                type="number" 
                min="0"
                step="0.1"
                onChange={props.amountChangeHandler} 
                value={props.amountValue} 
            />
        </div>
    );
};

export default AmountInput;