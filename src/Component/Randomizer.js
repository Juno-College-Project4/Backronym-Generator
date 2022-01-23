import axios from 'axios';
import { useEffect } from 'react';

const Randomizer = () => {

   useEffect(() => {
      axios({
         url: 'https://api.datamuse.com/sug?',
         method: 'GET',
         dataType: 'json',
         params: {
            s: "m",
            max: 10
         }


      }).then((response) => {
         console.log(response.data);
      })


   })

   return(
      <div>
         <h2>Randomizer</h2>
      </div>
   )
}

export default Randomizer;