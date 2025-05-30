import { useEffect, useState } from "react";
import axios from 'axios'

function Content() {
   const [data, setData] = useState({});

   useEffect(() => {
    axios.get(' http://localhost:5000/api/data')
    .then ( response => {
        setData(response.data)
    })
   }, [])

   return (
    <>
    <p>tes</p>
    <h1>{message}</h1>
    </>
   )
    
}

export default Content