import Randomizer from './Component/Randomizer.js';
import {useEffect} from 'react';
import './App.css';

function App() {

  


  return (
    <div>
      <h1>TESSST!</h1>
      <Randomizer />
    </div>
  );
}

export default App;

// Create 4-5 input for user to input individual letters of their chosen acronym 
// Take the user's input and post words that start with each letter of user's input
// Create firebase database to save user's selection
// Display user's selection in a different route


// STEPS
// Get info from api using axios or fetch
// Create multiple calls per user's letter input
    // Create form per letter (max 5) 
    // Call api on submit 
    // Save data to local variable 
    // Randomize data 
    // Save return to useState
// Save user's choice of backcronym in total
    // 
// Save chosen backronym to firebase database and display to page
// 

