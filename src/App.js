import axios from 'axios';
import { useEffect } from 'react';

function App() {

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

  return (
    <div>
      <h1>TESSST!</h1>
      <div>

        <div>
        <form onSubmit={handleSubmitOne}>
          <label htmlFor="one"></label>
          <input type="text" id="one" maxLength={1} placeholder="One" onChange={handleInputOne} value={inputOne} />
          <button>ADD</button>
        </form>

        {
          infoOne.map((results) => {
            return (
              <li>
                <p>{results['word']} </p>
              </li>
            )
          })
        }
        </div>

        <div>
        <form onSubmit={handleSubmitTwo}>
          <label htmlFor="two"></label>
            <input type="text" id="two" maxLength={1} placeholder="Two" onChange={handleInputTwo} value={inputTwo} />
          <button>ADD</button>
        </form>

          {
            infoTwo.map((resultss) => {
              return (
                <li>
                  <p>{resultss['word']} </p>
                </li>
              )
            })
          }
        </div>

        <div>
        <form onSubmit={handleSubmitThree}>
          <label htmlFor="three"></label>
            <input type="text" id="three" maxLength={1} placeholder="Three" onChange={handleInputThree} value={inputThree} />
          <button>ADD</button>
        </form>

          {
            infoThree.map((resultsss) => {
              return (
                <li>
                  <p>{resultsss['word']} </p>
                </li>
              )
            })
          }
        </div>

        <div>
        <form onSubmit={handleSubmitFour}>
          <label htmlFor="four"></label>
            <input type="text" id="four" maxLength={1} placeholder="Four" onChange={handleInputFour} value={inputFour}/>
          <button>ADD</button>
        </form>

          {
            infoFour.map((resultssss) => {
              return (
                <li>
                  <p>{resultssss['word']} </p>
                </li>
              )
            })
          }
        </div >
      </div>
    </div>
  );
}

export default App;
