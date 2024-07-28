import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1); //이전 상태 가져오기
  const onChange = (event) => setKeyword(event.target.value);
  //reder 중복 실행 방지용 함수 최조 1번만 실행
  useEffect(() => {
    console.log("i run only once")
  }, []);
  //keyword가 변할 떄마다 리렌더
  useEffect (()=>{
   console.log("i run when keyword changes")
  },[keyword]);
  useEffect (()=>{
    console.log("i run when counter changes")
   },[counter]);
  return (
    <div>
      <input value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here" />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
