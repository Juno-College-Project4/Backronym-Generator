import React, { useState } from "react";

// Form component

const Form = (props) => {

    const [formInputOne, setFromInputOne] = useState('');
    const [formInputTwo, setFromInputTwo] = useState('');
    const [formInputThree, setFromInputThree] = useState('');
    const [formInputFour, setFromInputFour] = useState('');


    const handleInputOne = (e) => {
        setFromInputOne(e.target.value);
    }

    const handleInputTwo = (e) => {
        setFromInputTwo(e.target.value);
    }

    const handleInputThree = (e) => {
        setFromInputThree(e.target.value);
    }

    const handleInputFour = (e) => {
        setFromInputFour(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.gatherAllUserInputs([formInputOne, formInputTwo, formInputThree, formInputFour])
    }


    return (
        <div className="App">
            <form>
                <input 
                    type="text" 
                    id='search' 
                    placeholder='A'
                    maxLength={1}
                    aria-label="Input the first letter of the acronym here"
                    onChange={handleInputOne} 
                    value={formInputOne} 
                />

                <input 
                    type="text" 
                    id='search' 
                    placeholder='C' 
                    aria-label="Input the second letter of the acronym here"
                    maxLength={1}
                    onChange={handleInputTwo} 
                    value={formInputTwo} 
                />

                <input 
                    type="text" 
                    id='search' 
                    placeholder='R' 
                    aria-label="Input the third letter of the acronym here"
                    maxLength={1}
                    onChange={handleInputThree} 
                    value={formInputThree} 
                />

                <input 
                    type="text" 
                    id='search' 
                    placeholder='O' 
                    aria-label="Input the fourth letter of the acronym here"
                    maxLength={1}
                    onChange={handleInputFour} 
                    value={formInputFour} 
                />
            </form>
            <button className="searchButton" onClick={handleSubmit}>Search</button>

        </div>
    )
}

export default Form;
