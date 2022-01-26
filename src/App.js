import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [ inputOne, setInputOne ] = useState("");
  // const [ inputTwo, setInputTwo ] = useState("");
  // const [ inputThree, setInputThree ] = useState("");
  // const [ inputFour, setInputFour ] = useState("");
  const inputOne = 't';
  const inputTwo = 'g';
  const inputThree = 'i';
  const inputFour = 'f';

  const userInputs = [ inputOne, inputTwo, inputThree, inputFour ];

  const [ randomWord, setRandomWord] = useState("");

  const backronymArray = [];

  const callDataMuse = userInputs.map((userInput) => {
    axios({
        url: "https://api.datamuse.com/sug?",
        method: 'GET',
        dataType: 'json',
        params: {
        s: userInput,
        max: 20, 
        },

      }).then((response) => {
        
      const resultsArray = response.data;
      // console.log(resultsArray, 'dataresponse works');
      const randomIndex = Math.floor(Math.random() * resultsArray.length);
      console.log(randomIndex, 'index works');
      // const randomWordLocal = resultsArray[randomIndex].word;
      // console.log(randomWordLocal, 'last one works');
      setRandomWord(resultsArray[randomIndex].word);
      console.log(resultsArray[randomIndex].word);
      })

    });

    console.log(callDataMuse);


    Promise.all(callDataMuse)
      .then((randomWord) => {
        console.log(randomWord)
      })

    // console.log(callDataMuse, 'this is working');




    // useEffect(() => {
    //   // callDataMuse();
    // }, []);

    return (
        <div className="App">
            <h1> check console </h1>
        </div>
    );
}

export default App;


// WE WERE ABLE TO GET RANDOM WORD BACK FOR A SINGLE INPUT

// function App() {
  // const [ inputOne, setInputOne ] = useState("");
  // const [ inputTwo, setInputTwo ] = useState("");
  // const [ inputThree, setInputThree ] = useState("");
  // const [ inputFour, setInputFour ] = useState("");
//   const inputOne = 't';
//   const inputTwo = 'g';
//   const inputThree = 'i';
//   const inputFour = 'f';

//   const userInputs = [ inputOne, inputTwo, inputThree, inputFour ];
//   // console.log(userInputs);

//   const [ randomWord, setRandomWord] = useState([]);

//   const backronymArray = [];

//   const callDataMuse = (() => {
//     axios({
//         url: "https://api.datamuse.com/sug?",
//         method: 'GET',
//         dataType: 'json',
//         params: {
//           s: inputOne,
//           max: 20, 
//           },

//       }).then((response) => {
        
//       const resultsArray = response.data;
//       // console.log(resultsArray, 'dataresponse works');
//       const randomIndex = Math.floor(Math.random() * resultsArray.length);
//       // console.log(randomIndex, 'index works');
//       // const randomWordLocal = resultsArray[randomIndex].word;
//       // console.log(randomWordLocal, 'last one works');
//       setRandomWord(resultsArray[randomIndex].word);
      
//       })
//     });
//     // console.log(callDataMuse);

//     // console.log(alert);

//     // Promise.all(callDataMuse)
//     //   .then((randomWord) => {
//         console.log(randomWord)
//     //   })

//     // console.log(callDataMuse, 'this is working');



//     useEffect(() => {
//       callDataMuse();
//     }, []);

//     return (
//         <div className="App">
//             <h1> check console </h1>
//         </div>
//     );
// }