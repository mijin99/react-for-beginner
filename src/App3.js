import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }                             //이전배열
    setToDos(currentArray => [toDo, ...currentArray])
    setToDo("");
  };
  
  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do"></input>
        <button>Add To Do </button>
      </form>
      <hr />
      <ul>  
               {/* map은 배열의 개수만큼 값,index로 꺼내서 n개의 배열을 다시 만들어줌 */}
        {toDos.map((item,index) =>( 
          <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
