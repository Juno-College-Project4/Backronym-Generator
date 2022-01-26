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
    
    }).then( (response) => {
      console.log(response.data)
      return response;
    });
  }

  for(let i = 1; i <= 4; i++) {
    userInputs.push(callDataMuse(i));
    // console.log(userInputs)
  }

  Promise.all(userInputs)
    .then(responses => {
      console.log(responses)
  })
  

      return (
        <div className="App">
            <h1> check console </h1>
        </div>
    );
  }


export default App;




//   // const userInputs = [ inputOne, inputTwo, inputThree, inputFour ];
//   // console.log(userInputs);

//   // const [ randomWord, setRandomWord] = useState([]);

//   // const callDataMuse = userInputs.map((userInput) => {
//   //   const backronymArray = [];
//   //   axios({
//   //       url: "https://api.datamuse.com/sug?",
//   //       method: 'GET',
//   //       dataType: 'json',
//   //       params: {
//   //         s: userInput,
//   //         max: 20, 
//   //       },

//   //     }).then((response) => {

//   //       return response;
        
//   //     // const resultsArray = response.data;
//   //     // // console.log(resultsArray, 'dataresponse works');
//   //     // const randomIndex = Math.floor(Math.random() * resultsArray.length);
//   //     // // console.log(randomIndex, 'index works');
//   //     // setRandomWord(resultsArray[randomIndex].word);
//   //     // // console.log(randomWordLocal, 'last one works');
//   //     // console.log(resultsArray[randomIndex].word);
//   //     })
//   //   });

//     // console.log(callDataMuse);