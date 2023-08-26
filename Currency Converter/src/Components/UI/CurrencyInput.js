import { useEffect, useState } from "react";
import "./CurrencyInput.css";
import Country_List from "../../assets/data/countries";

const CurrencyInput = props => {
    //a state for selected option (selected country)
    const [selectedOption, setSelectedOption] = useState(props.defaultValue);

    useEffect(()=>{
        setSelectedOption(props.defaultValue);
    },
    [props.defaultValue]);

    //add all currency codes to options accordingly Country_List file
    const countryOptions = Object.keys(Country_List).map(currencyCode => (
        <option key={currencyCode} value={currencyCode}>
            {currencyCode}
        </option>
    ));
    
    //gets selected option and 
    //pass it to flag changer function 
    //(which sets currencies and flags)
    const optionChangeHandler = event => {
        const currencyCode = event.target.value;
        setSelectedOption(currencyCode);
        const countryCode = Country_List[currencyCode]
        props.flagChangeHandler(props.direction,countryCode,currencyCode);
    };

    return (
        <div className={props.direction}>
            <p className="label">{props.label}</p>  
            <div className="select-input">
                <img src={props.flagUrl} alt="flag"/>
                <select onChange={optionChangeHandler} value={selectedOption}>
                    {countryOptions}
                </select>
            </div>
        </div>
    );
};

export default CurrencyInput;