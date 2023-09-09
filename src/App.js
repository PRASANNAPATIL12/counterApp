import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {

  const [count, setcount] = useState(0);

  return (
    <>
    <h3> WELCOME TO COUNTER APP</h3>
    <h1>My count is {count}</h1>
    <button onClick={()=>setcount(count+1)}> Add count</button>

    </>
  );
}

export default App;
