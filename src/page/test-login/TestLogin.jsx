// import React, { useState } from "react";
// import "./styles.css";
// import axios from "axios";

// const url = 'https://rayteb.ir/logsight/login';

// export default function LoginPage() {
//   const [state, setState] = useState({
//     name: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setState({
//       ...state,
//       [e.target.name]: value,
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const userData = {
//       userName: state.name,
//       password: state.password,
//     };
 
//        axios
//       .post("http://rayteb.ir/logSight/login", userData)
//       .then((response) => {
//         console.log(response);
//       });
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: userData,
//   });
  
//   const text = await response.text();
  
//   console.log(text);
//   };

//   return (
//     <div>
//       <h1>Register or Create new account</h1>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">
//           Name
//           <input
//             type="text"
//             name="name"
//             value={state.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="password">
//           password
//           <input
//             type="password"
//             name="password"
//             value={state.password}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }