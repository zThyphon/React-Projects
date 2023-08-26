import { useState} from "react";
import "./ConvertBox.css";
import CurrencyInput from "../UI/CurrencyInput";
import ChangeButton from "../UI/ReverseButton";
import Button from "../UI/Button";

const ConvertBox = props =>{
    //setting states
    const [currentCountry, setCurrentCountry] = useState("US");
    const [targetCountry, setTargetCountry] = useState("TR");
    const [currentCurrency, setCurrentCurrency] = useState("USD");
    const [targetCurrency, setTargetCurrency] = useState("TRY");
    const initialInfo = `0 ${currentCurrency} = 0 ${targetCurrency}`; 
    const [info, setInfo] = useState(initialInfo);
    
    //changes flagUrl accordingly selected option from CurrencyInput component
    const flagChangeHandler = (which,countryCode,currencyCode) =>{
        which === "from" ? setCurrentCountry(countryCode): setTargetCountry(countryCode);
        which === "from" ? setCurrentCurrency(currencyCode) : setTargetCurrency(currencyCode);
    }

    //reverses current and reverse countries and currencies 
    //it triggered from ReverseButton component
    const reverseCountriesHandler = () =>{
        setCurrentCountry(targetCountry);
        setTargetCountry(currentCountry);

        setCurrentCurrency(targetCurrency);
        setTargetCurrency(currentCurrency);        
        setInfo(`0 ${currentCurrency} = 0 ${targetCurrency}`); 
    };

    //get currency information from exchangerate-api.com
    const fetchDataHandler = async (event) => {
        event.preventDefault();
        try 
        {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/592a080db8532183e87b0e99/latest/${currentCurrency}`);
            const result = await response.json();
            const exchangeRate = result.conversion_rates[targetCurrency];
            const exchangeResult = (props.amount * exchangeRate).toFixed(2);
            setInfo(`${props.amount} ${currentCurrency} = ${exchangeResult} ${targetCurrency}`);
        }
        catch (error)
        {
            console.log(error);
            setInfo("An error occured...");
        }
    };

    return (
        <div className="convert-box">
            <CurrencyInput 
                direction="from" 
                label="From" 
                flagUrl={`https://flagcdn.com/48x36/${currentCountry.toLowerCase()}.png`} 
                defaultValue={currentCurrency}
                flagChangeHandler={flagChangeHandler}
            />

            <ChangeButton reverseCountriesHandler={reverseCountriesHandler} />

            <CurrencyInput 
                direction="to" 
                label="To" 
                flagUrl={`https://flagcdn.com/48x36/${targetCountry.toLowerCase()}.png`}
                defaultValue={targetCurrency}
                flagChangeHandler={flagChangeHandler}
            />

            <div className="result">{info}</div>

            <Button text="Get Exchange Rate" fetchDataHandler={fetchDataHandler} />
        </div>
    );
};

export default ConvertBox;