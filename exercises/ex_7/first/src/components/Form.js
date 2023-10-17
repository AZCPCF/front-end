import React, { useRef } from 'react'
export default function Form() {
    const pRef = useRef(null)
    return (
        <>
            <span>input : </span>
            <input type="text" ref={pRef} onChange={e => pRef.current.textContent = e.target.value} />
            <p>value : <span ref={pRef}></span></p>
        </>
    )
}