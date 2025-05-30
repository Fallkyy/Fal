import { useState } from "react";

export default function Login() {
// const fruits = [
//     'mango', 'apple', 'banana', 'orange', 'durian'
// ];

const fruits = [

 {name:"banana", price:10, score:9},
 {name:"apple", price:10, score:8},
 {name:"durian", price:10, score:7},
 {name:"strawberry", price:10, score:9},
 {name:"melon", price:10, score:9}


]

const sets = () =>{
return <div></div>
}

const [count, setCount ] = useState(0)
const [history, setHistory] = useState([])



return (<div>  
    {fruits.map((fruit,index) => 
        (<p key={fruit} >{fruit.name} {fruit.price} {fruit.score} {index + 1}</p> 
    ))}
<button onClick={() => setCount(count + 1)}>Tambah</button>
<button onClick={() => setCount(count - 1)}>Kurang</button>
<button onClick={sets}>Tes</button>
    <p>{count}</p>

  
    </div>


)




}