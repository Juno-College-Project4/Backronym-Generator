import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";


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
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"> Your first letter </label>
                <input type="text" id='search' placeholder='Letter One' onChange={handleInputOne} value={formInputOne} />

                <label htmlFor="search"> Your second letter </label>
                <input type="text" id='search' placeholder='Letter Two' onChange={handleInputTwo} value={formInputTwo} />

                <label htmlFor="search"> Your third letter </label>
                <input type="text" id='search' placeholder='Letter Three' onChange={handleInputThree} value={formInputThree} />

                <label htmlFor="search"> Your fourth letter </label>
                <input type="text" id='search' placeholder='Letter Four' onChange={handleInputFour} value={formInputFour} />
                <button >Search</button>
            </form>
        </div>
    )
}

export default Form;
