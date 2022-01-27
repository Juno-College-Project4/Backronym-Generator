// import {useState} from 'react/cjs/react.development';


// const Form = () => {

//     const [formInputOne, setFromInputOne] = useState('');
//     const [formInputTwo, setFromInputTwo] = useState('');
//     const [formInputThree, setFromInputThree] = useState('');
//     const [formInputFour, setFromInputFour] = useState('');


//     const handleInputOne = (e) => {
//         setFromInputOne(e.target.value);
//     }

//     const handleInputTwo = (e) => {
//         setFromInputTwo(e.target.value);
//     }

//     const handleInputThree = (e) => {
//         setFromInputThree(e.target.value);
//     }

//     const handleInputFour = (e) => {
//         setFromInputFour(e.target.value);
//     }


//     const callData = (e) => {
//         e.preventDefault();
//         console.log(formInputOne, formInputTwo, formInputThree, formInputFour)

//     }


//     return (
//         <div className="App">
//             <form onSubmit={callData}>
//                 {/* <label htmlFor="search"> Your first letter </label> */}
//                 <input type="text" id='search' placeholder='Letter One' onChange={handleInputOne} value={formInputOne} maxLength={1}/>

//                 {/* <label htmlFor="search"> Your second letter </label> */}
//                 <input type="text" id='search' placeholder='Letter Two' onChange={handleInputTwo} value={formInputTwo} maxLength={1}/>

//                 {/* <label htmlFor="search"> Your third letter </label> */}
//                 <input type="text" id='search' placeholder='Letter Three' onChange={handleInputThree} value={formInputThree} maxLength={1}/>

//                 {/* <label htmlFor="search"> Your fourth letter </label> */}
//                 <input type="text" id='search' placeholder='Letter Four' onChange={handleInputFour} value={formInputFour} maxLength={1}/>
//                 <button >Search</button>
//             </form>
//         </div>
//     )
// }

// export default Form;