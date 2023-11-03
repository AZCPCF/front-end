import { HeaderDiv, Link } from './components/styledCM'
import React, { useState } from 'react'
import Modal from './components/Modal'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import FirstTime from './pages/FirstTime'
export default function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [page, setPage] = useState(-1)
    const handleModalButton = () => {
        setIsOpen(false)
    }
    return (
        <div>
            
            <HeaderDiv>
                <Link
                    onClick={() => {
                        setIsOpen(true)
                        setPage(0)
                    }}
                >About us</Link>
                <Link
                    onClick={() => {
                        setIsOpen(true)
                        setPage(1)
                    }}
                >Contact us</Link>
            </HeaderDiv>
            <Modal open={isOpen} onClose={handleModalButton}>{page === 1 ? <ContactUs /> :  page === 0 ? <AboutUs setPagee={() => setPage(2)} />  :  <FirstTime/>}</Modal>
        </div>
    )
}
