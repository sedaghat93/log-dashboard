import React, { useEffect, useState } from "react";

import "./Home.css";
import HeaderShowError from "../../components/HeaderShowError/HeaderShowError";
import ShowErrror from "../../components/ShowError/ShowErrror";
import RechartError from "../../components/RechartError/RechartError";
import axios from "axios";

function Home({listOfErrors}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
axios.get("https://rayteb.ir/logSight/login").then(res => console.log(res))
  },[])


  function readMoreHandler(){
    setIsOpen(!isOpen)
    // alert("this 5 of error")
  }
  
  return (
    <div className="home-content">
      <HeaderShowError listOfErrors={listOfErrors} />
      <RechartError />
      <ShowErrror listOfErrors={listOfErrors} readMore={readMoreHandler} setIsOpen={setIsOpen} isOpen={isOpen}/> 
    </div>
  );
}
export default Home;
