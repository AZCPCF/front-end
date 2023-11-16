import React, { useState } from "react"
import Movie from "./components/Movie"
import axios from 'axios'
const App = () => {
    const xhr = new XMLHttpRequest()
    fetch('https://swapi.py4e.com/api/films',{method: 'POST'})
    xhr.open('POST', 'https://swapi.py4e.com/api/films')
    axios({url:"https://swapi.py4e.com/api/films",method:"POST"})
    axios.post('https://swapi.py4e.com/api/films')
     // const [dataa, setData] = useState([])
    // const [clicked, setClicked] = useState(false)
    // const handler = () => {
    //     clicked === false ? setClicked(true) : setClicked(false)
    //     fetch('https://swapi.py4e.com/api/films', {
    //         method: 'GET'
    //     }).then(response => response.json()).then(data => {
    //         setData(data.results)
    //     })
    // }
    // return (
    //     <>
    //         <button style={{ margin: '20px' }} onClick={handler}>show movies</button>
    //         {dataa.length > 0 && clicked === true &&
    //             <Movie data={dataa}></Movie>
    //         }
    //     </>
    // )
}
export default App