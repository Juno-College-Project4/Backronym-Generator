import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

// Form component
const Form = () => {

    // const initialValues =
    //     letterOne: "",
    //     letterTwo: "",
    //     letterThree: "",
    //     letterFour: "",
    //;

    // const [ inputOne, setInputOne ] = useState("");
    // const [ inputTwo, setInputTwo ] = useState("");
    // const [ inputThree, setInputThree ] = useState("");
    // const [ inputFour, setInputFour ] = useState("");

    // const userInputs = [ inputOne, inputTwo, inputThree, inputFour ];

    // const [ randomWord, setRandomWord ] = useState("");

    // // Creating a state to store values from the input field
    // const [ inputValue, setInputValue ] = useState(initialValues);

    // const handleSubmit = (event) => {
    //     const { name, inputValue } = event.target;

    //     setInputValue({
    //         ...inputValue,
    //         [name]: inputValue,
    //     });
    //     event.preventDefault();
    // };

    // const handleUserInput = (event) => {
    //     const { name, inputValue } = event.target;

    //     setInputValue({
    //         ...inputValue,
    //         [name]: inputValue,
    //     });
    // };

    // // create function that allows the user to clear the input fields with one button
    // const resetUserInput = () => {
    //     setInputValue("");
    // };

    // // calling the API
    // const callDataMuse = userInputs.map((userInput) => {
    //     axios({
    //         url: 'https://api.datamuse.com/sug?',
    //         method: 'GET',
    //         dataType: 'json',
    //         params: {
    //             s: userInput,
    //             max: 20,
    //         },
    //     }).then((res) => {
    //         // console.log(res.data);
    //         const resultsArray = res.data
    //         const randomIndex = Math.floor(Math.random() * resultsArray.length);
    //         console.log(resultsArray[randomIndex].word);

    //         setRandomWord(resultsArray[randomIndex].word);
    //     });
    //     return randomWord;
    // });

    // useEffect(() => {
    //     callDataMuse();
    // }, []);


    // render component
    return(
        <div className="formContainer">
            <form>
                <input type="text" maxLength={1} placeholder="A"/>
                <input type="text" maxLength={1} placeholder="C"/>
                <input type="text" maxLength={1} placeholder="R"/>
                <input type="text" maxLength={1} placeholder="O"/>
            </form>

            {/* submit button */}
            <button className="submitButton">Submit</button>

            {/* allows user to reset all the values */}
            <button className="resetValues">Reset</button>
        </div>
    )
}

export default Form;
