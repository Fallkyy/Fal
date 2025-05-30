import { useState } from "react";
import './login.css'
 



export default function Home() {
let [count, setCount] = useState(0);
const [input, setInput] = useState("");
const [history, setHistory] =useState([])

const increment = () => {
  setCount(count + 1)
};
const decrement = () => {
  setCount(count - 1)
};

const reset = () => {
  setCount(0);
  setHistory([...history,0])
};

const handleinput = (e) =>{ 
  setInput(e.target.value)
}

const setCustomCount = () => {
const custom = parseInt(input);
if(!isNaN(custom)){
  setCount(custom);
  setHistory([...history, custom]);
 
}
else {
   return (<h1>TES</h1> )
}

}

const clearHistory = () =>{
  setHistory([]);
}


  return (
    <div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Clear</button>
     <input type="number" value={input} onChange={handleinput} />
     <button onClick={setCustomCount}>Set</button>
     <button onClick={clearHistory}>Clear</button>
      <p>{count}</p>
      <h1>Halo Adik!</h1>
      <h2>History</h2>
      <ul>
        {history.map ((item,index) => (
          <li key={index}>{item}: {index}</li>

        ))}
      </ul>
    
    </div>

  );
}