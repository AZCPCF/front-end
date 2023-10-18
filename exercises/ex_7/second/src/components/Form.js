import React, { useState, useRef } from 'react';
export default function Form(props) {
    const styles = {
        form: {
            background: props.bg, color: props.color, fontSize: props.fSize,
            width: props.width, margin: props.formMargin, display: props.display,
            flexDirection: props.flexDirection, justifyContent: props.justifyContent,
            borderRadius: props.formBorderRadius, boxShadow: props.boxShadow
        },
        p: { margin: props.margin, paddingTop: props.paddingTop },
        input: {
            borderRadius: props.borderRadius, margin: props.margin,
            border: props.border, height: props.height
        }
    }
    // styles
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false)
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const ButtonRef = useRef(false)
    const isValid = () => isEmailValid && isPasswordValid ? ButtonRef.current.disabled = false : ButtonRef.current.disabled = true
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
        setIsEmailValid(event.target.value.includes('@'))
        isValid()
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
        setIsPasswordValid(event.target.value.length >= 7)
        isValid()
    }
    // functions and hooks
    return (
        <form style={styles.form} onSubmit={e => e.preventDefault() + console.log(`email : ${email} \npassword : ${password}`)}>
            <p style={styles.p}>email : </p>
            <input style={styles.input} placeholder='email' type="email" value={email} onChange={handleEmailChange} />
            <p style={styles.p}>password : </p>
            <input style={styles.input} placeholder='password' type="password" value={password} onChange={handlePasswordChange} />
            <br />
            <button style={styles.input} type="submit" ref={ButtonRef} disabled>Submit</button>
        </form>
    )
}
