import React, { useState } from 'react'
import ChangeState from './components/PlusMinus';

const obj = {
    bg: "red",
    color: "green",
    fSize: "20px"
}

const App = () => {
    const [x, setX] = useState(1);
    // const InputRef = useRef(null)
    // const RefHandler = () => InputRef.current.focus()
    return (
        <>
            <ChangeState {...obj} changeState={setX} state={x} />
            <b> {x} </b>

            {/* <input  placeholder={"hello world"} ref={InputRef} />
    <button onClick={RefHandler}>click on</button> */}
        </>
    )
}
export default App
