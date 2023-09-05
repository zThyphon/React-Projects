import "./Row.css";
import countries from "../../assets/countries";
import { useSelector, useDispatch } from "react-redux";
import { translateActions } from "../../store/translate-slice";
import { useEffect } from "react";
import { getKeyByValue } from "../../store/translate-actions";

const Row = (props) => {
  const dispatch = useDispatch();
  //Get informations 
  const currentCountry = useSelector(state => state.currentCountry);
  const targetCountry = useSelector(state => state.targetCountry);
  const currentCountryText = useSelector(state => state.currentCountryText);
  const targetCountryText = useSelector(state => state.targetCountryText);

  /*
  Change currentCountry and targetCountry 
  in every option changes in select tag
  */

  const countryChangeHandler = (event) => {
    const selectedCountry = event.target.value;
    
    props.direction === "from"
      ? dispatch(translateActions.setCurrentCountry(selectedCountry))
      : dispatch(translateActions.setTargetCountry(selectedCountry));
  };

  useEffect(() => {
  }, [currentCountryText, targetCountryText]);

  /*
  Get direction value with using props 
  and create css class name accordingly it
  */

  const direction = props.direction;
  const classes = "row " + direction;

  //Set countryOptions with using countries in countries.js file
  const countryOptions = Object.keys(countries).map((countryCode) => (
    <option key={countryCode} value={countries[countryCode]}>
      {countries[countryCode]}
    </option>
  ));

  //Copy text to clipboard using direction prop
  const copyTextToClipboard = async () => {
    try 
    {
      let text;
      //Set text 
      (direction==="from") ? text=currentCountryText: text=targetCountryText;

      //Copy text to clipboard
      await navigator.clipboard.writeText(text);
    } 
    //Throw error if an error occurs
    catch (error) 
    {
      throw error;
    }
  };

  //This function reads text with voice
  const readText = async() => {
    try
    {
      //Control if window supports voice
      if ('speechSynthesis' in window) {
        let text;
        let lang;

        /*
        Set text and lang which textarea value will be read by browser
        */

        if(direction === "from")
        {
          text = currentCountryText;
          lang = getKeyByValue(countries,currentCountry);
        }
        else if (direction === "to")
        {
         text = currentCountryText;
         lang = getKeyByValue(countries,targetCountry);
        }

        //Set an speech object
        const speech = new SpeechSynthesisUtterance();
          
        //Set text attribute
        speech.text = text;
        
        //Set lang 
        speech.lang = lang;
        
        //Speek the speech object by browser
        speechSynthesis.speak(speech);
      } 
      //Throw error if browser is not supported by users' browser
      else {
        throw new Error("Text-to-speech not supported in this browser.");
      }
    }
    //Throw error if an error occurs
    catch (error)
    {
      throw error;
    }
  };
  return (
    <li className={classes}>
      <div className="icons">
        <i 
          id={direction} 
          className="fas fa-volume-up"
          onClick={readText}
        ></i>
        <i
          id={direction}
          className="fas fa-copy"
          onClick={copyTextToClipboard}
        ></i>
      </div>
      <select
        defaultValue={props.defaultCountry}
        onChange={countryChangeHandler}
      >
        {countryOptions}
      </select>
    </li>
  );
};

export default Row;
