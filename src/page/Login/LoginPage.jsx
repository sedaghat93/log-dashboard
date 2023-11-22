import { useForm } from "react-hook-form";
import "./LoginPage.css";
import axios from "axios";

const url = 'https://rayteb.ir/logsight/login';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userData = {
      username: data.userName,
      password: data.password,
    };

    console.log(data.userName);

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));

      axios
      .post(url, data)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    console.log(data);

    // axios
    //   .post('https://jsonplaceholder.typicode.com/posts', data)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
    // console.log(data);
  };

  return (
    <div className="bg-form bg-slate-300">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <p className="m-4 p-2 font-semibold">لطفا وارد اکانت خود شوید</p>

        <input
          {...register("userName", { required: "username is required" })}
          aria-invalid={errors.firstName ? "true" : "false"}
          placeholder="userName"
          className="input-form"
        />
        {<p>{errors.userName?.message}</p>}

        <input
          {...register("password", { required: "username is required" })}
          placeholder="password"
          className="input-form"
        />
        {<p>{errors.password?.message}</p>}

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          type="submit"
          className="btn w-28 h-12 rounded-lg border border-[#01a754] bg-[#eee] m-10 p-1"
        />
      </form>
    </div>
  );
}

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
