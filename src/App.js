import axios from 'axios';
import './styles.css';
import { useEffect, useState } from 'react';

import { getDatabase, push, ref } from 'firebase/database';
import firebase from './firebase';

import Header from './components/Header';
import Intro from './components/Intro';
import BackronymList from './components/BackronymList';
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

  // adding spaces into array result and making it into a string
  const displayBackronym = backronymArray.join(" ")

  // save our generated backronym to firebase
  const handleSave = (e) => {
    e.preventDefault();

    const database = getDatabase(firebase);
    const dbRef = ref(database);
    push(dbRef, backronymArray)
  }

  return (
    <div className="App">
      <Header />
        <main>
          <Intro />
          
            <Form gatherAllUserInputs={gatherAllUserInputs} />
            <p className="generateBackronym">This is what it means:</p>
            <p className="theBackronym">{displayBackronym}</p>
            
          <div className="saveHistory">
            <button className="saveButton" onClick={handleSave}>Save Backronym</button>

            <BackronymList />
          </div>
        </main>
      <Footer />
    </div>
  );
}

export default App;
