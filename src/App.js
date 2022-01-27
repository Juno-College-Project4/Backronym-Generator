import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

import Header from './components/Header';
// import Form from './components/Form';
import Footer from './components/Footer';


function App() {


  const [ inputOne, setInputOne ] = useState("");
  const [ inputTwo, setInputTwo ] = useState("");
  const [ inputThree, setInputThree ] = useState("");
  const [ inputFour, setInputFour ] = useState("");
  
  const [ randomWord, setRandomWord ] = useState("");

  const [formInputOne, setFromInputOne] = useState('');
  const [formInputTwo, setFromInputTwo] = useState('');
  const [formInputThree, setFromInputThree] = useState('');
  const [formInputFour, setFromInputFour] = useState('');
  
    
    const userInputs = [];

    const backronymArray = [];

    function callDataMuse(userInput) {
      return axios({
        url: "https://api.datamuse.com/sug?",
        method: 'GET',
        dataType: 'json',
        params: {
          s: userInput,
          max: 20,
        },

      }).then((response) => {
        // console.log(response.data)
        return response.data;
      });
    
    }

    useEffect(() => {
      const callData = (event) => {
        event.preventDefault();
      for (let i = 1; i <= 4; i++) {
        userInputs.push(callDataMuse(i));
        // console.log(userInputs, 'this is userInputs')
      }
    }
    }, [])

    Promise.all(userInputs)
      .then(promiseArray => {
        // console.log(promiseArray, 'This is responses')

        promiseArray.map((letterArray) => {
          // letterArray.data
          const randomIndex = Math.floor(Math.random() * letterArray.length);
          // console.log(letterArray[randomIndex].word);
          setRandomWord(letterArray[randomIndex].word);
        })
      })

  


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


  const callData = (e) => {
    e.preventDefault();
    console.log(formInputOne, formInputTwo, formInputThree, formInputFour)

  }

      return (
        <div className="App">
            <h1> check console </h1>
          <form onSubmit={callData}>
            {/* <label htmlFor="search"> Your first letter </label> */}
            <input type="text" id='search' placeholder='Letter One' onChange={handleInputOne} value={formInputOne} maxLength={1} />

            {/* <label htmlFor="search"> Your second letter </label> */}
            <input type="text" id='search' placeholder='Letter Two' onChange={handleInputTwo} value={formInputTwo} maxLength={1} />

            {/* <label htmlFor="search"> Your third letter </label> */}
            <input type="text" id='search' placeholder='Letter Three' onChange={handleInputThree} value={formInputThree} maxLength={1} />

            {/* <label htmlFor="search"> Your fourth letter </label> */}
            <input type="text" id='search' placeholder='Letter Four' onChange={handleInputFour} value={formInputFour} maxLength={1} />
            <button >Search</button>
          </form>
        </div>
    );
  }


export default App;

