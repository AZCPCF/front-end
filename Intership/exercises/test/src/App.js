import './App.css'
import { useEffect, useState ,useRef} from 'react'
const App = () => {
    const [title, setTitle] = useState(0)
    const buttonRef = useRef('clicked')
    useEffect(() => {
        document.title = `clicked ${title} times`
        buttonRef.current.innerText = `button ${title}`
        console.log(title)
    }, [title,buttonRef])
    return <button ref={buttonRef} onClick={() => setTitle(title + 1)}>click</button>
}

export default App