import Container from "./Components/Layouts/Container";
import Wrapper from "./Components/Layouts/Wrapper";
import TextInput from "./Components/Layouts/TextInput";
import Controls from "./Components/Layouts/Controls";
import Button from "./Components/UI/Button";
import { fetchTranslateData } from "./store/translate-actions";
import { useSelector,useDispatch } from "react-redux";
import { translateActions } from "./store/translate-slice";

function App() {
  const dispatch = useDispatch();
  //Get fetch function parameters
  const currentCountry = useSelector(state => state.currentCountry);
  const targetCountry = useSelector(state => state.targetCountry);
  const currentCountryText = useSelector(state => state.currentCountryText);

  const translateHandler = async () => {
    /*
    Change state for giving information to user 
    during fetch api gets the translate value
    */

    dispatch(
      translateActions.setTargetCountryText("Translation is getting...")
    );

    //Get translated data from translate api function
    const translatedData = await fetchTranslateData(currentCountry,targetCountry,currentCountryText);
      
    /*
    Convert target state accordingly translated data 
    which came from fetch translate function api
    */
   
    dispatch(
      translateActions.setTextValue({
        direction: "to",
        text: translatedData
     }));
  };

  return (
    <Container>
      <Wrapper>
        <TextInput></TextInput>
        <Controls></Controls>
      </Wrapper>
      <Button onClick={translateHandler} text="Translate Text"/>
    </Container>
  );
}

export default App;
