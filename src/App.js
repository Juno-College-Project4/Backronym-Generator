import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {

  // destructure what the usestate returns 
  const [backronymArray, setBackronymArray] = useState([]);
  const [allUserInputs, setAllUserInputs] = useState([]);

  const userInputs = [];

  // calling the data muse api
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
      console.log(response.data)
      return response.data;
    });
  }

  // creating a function to gather user inputs from the form
  const gatherAllUserInputs = (inputs) => {
    setAllUserInputs(inputs)
  }

  useEffect(() => {
    // looping through userInPuts from form 
    for (let i = 0; i < allUserInputs.length; i++) {
      userInputs.push(callDataMuse(allUserInputs[i]));
    }

    // watch for completion of loop
    Promise.all(userInputs)
      .then(promiseArray => {

        // map through array of arrays
        const randomWordArray = promiseArray.map((letterArray) => {
          // get random word from array
          const randomIndex = Math.floor(Math.random() * letterArray.length);
          return letterArray[randomIndex].word;
        })

        setBackronymArray(randomWordArray);

      })

  }, [allUserInputs])



  return (
    <div className="App">
      <h1> check console </h1>
      <Form gatherAllUserInputs={gatherAllUserInputs} />

    </div>
  );
}

export default App;
