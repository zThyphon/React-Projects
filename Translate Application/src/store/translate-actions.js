export const fetchTranslateData = async (currentCountry,targetCountry,currentCountryText) =>{
    //This function fetch data and give result
    const fetchData = async () => {
        //Define api url with using inputs (function parameters)
        let apiUrl = `https://api.mymemory.translated.net/get?q=${currentCountryText}&langpair=${currentCountry}|${targetCountry}`;
        //Get Response
        const response = await fetch(apiUrl);

        //Throw error if an error occurs
        if (!response.ok) {
            throw new Error("There occured an error!");
        }

        //Convert response information to json
        const translateDataJson = await response.json();
        //Get translate result from json 
        
        const resultText = translateDataJson.responseData.translatedText;
        return resultText;
    };

    try 
    {
        //Get promise, convert it to string and return it
        const translatedData = await fetchData();
        return translatedData;
    }

    //If an error occurs throw the error
    catch (error)
    {
        throw error;
    }
};

//This function is used in the project for getting country lang from country name
export const getKeyByValue = (object, value) => {
    for (const key in object) {
        if (object.hasOwnProperty(key) && object[key] === value) {
          return key;
        }
      }
      return null;
};
