import { getDatabase, get, ref, onValue } from 'firebase/database';
import { useEffect, useState } from 'react/cjs/react.development';
import firebase from '../firebase';

const BackronymList = () => {

    const [savedBackronymArray, setSavedBackronymArray] = useState([])

    const handleHistory = (e) => {
        e.preventDefault();


        const database = getDatabase(firebase);

        const dbRef = ref(database);
        // setSaveBackronym({ backronymArray })
        onValue(dbRef, (response) => {
            console.log(response)
            const objFromFirebase = response.val()

            console.log(objFromFirebase)

            const newBackronymArray = []
            for (let key in objFromFirebase) {
                const arrayInObj = objFromFirebase[key]
                console.log(arrayInObj)
                newBackronymArray.push(arrayInObj)
                // console.log(newBackronymArray)
                setSavedBackronymArray(newBackronymArray)
            }

            // setSavedBackronymArray(newBackronymArray[key].value)

            console.log(savedBackronymArray)
        })

        // console.log(savedBackronymArray)


    }


    return (
        <div>
            <button onClick={handleHistory} >See History</button>

            <ul>
                {savedBackronymArray.map((savedBackronym) => {
                    return (
                        <li>{savedBackronym.join("  ")}</li>
                    )
                })}
            </ul>

        </div>
    )



}

export default BackronymList;