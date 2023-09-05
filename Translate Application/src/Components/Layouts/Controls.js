import React, { useEffect, useState } from "react";
import "./Controls.css";
import Row from "./Row";
import { translateActions } from "../../store/translate-slice";
import { useDispatch, useSelector } from "react-redux";

const Controls = () => {
    const dispatch = useDispatch();

    //Get country values
    const currentCountry = useSelector((state) => state.currentCountry);
    const targetCountry = useSelector((state) => state.targetCountry);

    const [rerenderKey, setRerenderKey] = useState(0); // Initialize a key state variable

    const reverseCountriesHandler = () => {
        dispatch(translateActions.reverseCountries());
        setRerenderKey((prevKey) => prevKey + 1); // Update the key to force a re-render
    };

    // Use useEffect to listen for changes in currentCountry and targetCountry
    useEffect(() => {
        // This code will run whenever currentCountry or targetCountry changes
    }, [currentCountry, targetCountry]); // Specify the dependencies here

    return (
        <ul key={rerenderKey} className="controls">
            <Row
                direction="from"
                defaultCountry={currentCountry}
            ></Row>
            <li className="exchange" onClick={reverseCountriesHandler}>
                <i className="fas fa-exchange-alt"></i>
            </li>
            <Row
                direction="to"
                defaultCountry={targetCountry}
            ></Row>
        </ul>
    );
};  

export default Controls;
