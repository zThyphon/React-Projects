    import { createSlice } from "@reduxjs/toolkit";

    const translateSlice = createSlice({
        name: "translate",
        //Set initial states
        initialState: {
            currentCountry: "Turkish",
            currentCountryText: "",
            targetCountry: "English",
            targetCountryText: "",
        },

        reducers: {
            //Reverse Countries (from=to, to=from)
            reverseCountries(state, action) {
                const { 
                    currentCountry, 
                    targetCountry, 
                    currentCountryText,
                    targetCountryText,
                } = state;
                state.currentCountry = targetCountry;
                state.targetCountry = currentCountry;
                state.currentCountryText = targetCountryText;
                state.targetCountryText = currentCountryText;
            },

            //Sets Current Country (from)
            setCurrentCountry(state, action) {
                state.currentCountry = action.payload;
            },

            //Sets Target Country (to)
            setTargetCountry(state, action) {
                state.targetCountry = action.payload;
            },

            //Sets Target Country's Text (it will be used by api function)
            setTargetCountryText(state, action)
            {
                state.targetCountryText = action.payload;
            },
            
            //Sets current and target country textarea values
            setTextValue(state, action) {
                const direction = action.payload.direction;
                (direction==="from") ? state.currentCountryText = action.payload.text: 
                state.targetCountryText = action.payload.text; 
            }, 
        }
    });

    export const translateActions = translateSlice.actions;
    export default translateSlice;