import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello(){
 /*  아래 익명 함수로 만든 useEffect랑 동일 기능 
 function byFn(){
    console.log("bye");
  }
  function hiFn(){
    console.log("created : )");
    return byFn;
  } */

  useEffect(()=>{
    console.log("hi");
    return ()=> console.log("bye");
  },[])
  /* 바로 위 useEffect과 같은 기능인데, 요즘은 function을 명시적으로 쓰지x 
  useEffect(function(){
    console.log("hi");
    return function(){console.log("bye")};
  },[]); */

 // useEffect(hiFn,[])
  return <h1>Hello</h1>
}

function App() {
  const [showing,setShowing] =useState(false);
  const onClick =()=> setShowing((prev) =>!prev);
 return(
  <div>
    {showing? <Hello/>: null}
    <button onClick={onClick}>{showing?"Hide":"Show"}</button>
  </div>
 );
}

export default App;
