import "./ReverseButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const ChangeButton = props => 
{
    const changeCountriesHandler = () =>
    {
        props.reverseCountriesHandler();
    };

    return (
        <div className="reverse">
              <FontAwesomeIcon icon={faExchangeAlt} size="1x" onClick={changeCountriesHandler}/>
        </div>
    );
};

export default ChangeButton;