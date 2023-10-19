import React, { useRef } from 'react'
export default function Form() {
    const inputRef = useRef(null)
    return (
        <>
            <div className="App">
                <input type="text" onChange={e => inputRef.current.innerHTML = 'value :  '+ e.target.value}/>
                <p ref={inputRef}>value : </p>
            </div>
        </>
    )
}