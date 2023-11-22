import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeaderShowError from "./components/HeaderShowError/HeaderShowError";
import RechartError from "./components/RechartError/RechartError";
import ShowErrror from "./components/ShowError/ShowErrror";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/Login/LoginPage";
import Home from "./page/Home/Home";

function App() {

  const [listOfErrors, setListOfErrors] = useState([]);


  function getAllErrors() {
    axios.get("http://localhost:3030/table-rows").then((res) => {
      setListOfErrors(res.data);
      // console.log(res.data);
    });
  }

  useEffect(() => {
    getAllErrors();
  }, []);


  return (
    <div className="container m-auto ">
      <Navbar listOfErrors={listOfErrors} />
      <Routes>
        <Route path="/" element={<Home listOfErrors={listOfErrors}/>}/>
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      {/* <HeaderShowError listOfErrors={listOfErrors} />
      <RechartError />
      <ShowErrror listOfErrors={listOfErrors} readMore={readMoreHandler} setIsOpen={setIsOpen} isOpen={isOpen}/> */}
      </div> 
  );
}

export default App;
