import { getDatabase, ref, onValue } from 'firebase/database';
import { useState } from 'react/cjs/react.development';
import firebase from '../firebase';

const BackronymList = () => {

    const [savedBackronymArray, setSavedBackronymArray] = useState([])

    // creating a handle submit that pulls the saved backcronyms to append to page
    const handleHistory = (e) => {
        e.preventDefault();

        const database = getDatabase(firebase);

        const dbRef = ref(database);
        
        onValue(dbRef, (response) => {
            
            const objFromFirebase = response.val()

            const newBackronymArray = []
            for (let key in objFromFirebase) {
                const arrayInObj = objFromFirebase[key]
              
                newBackronymArray.push(arrayInObj)
               
                setSavedBackronymArray(newBackronymArray)
            }
        })
    }


    return (
        <div className="wrapper">
            <button onClick={handleHistory} className="seeHistory">See History</button>

            <ul className="historyList">
                {savedBackronymArray.map((savedBackronym) => {
                    return (
                        <li className="savedBackronyms">{savedBackronym.join(" ")}</li>
                    )
                })}
            </ul>

        </div>
    )
}

export default BackronymList;