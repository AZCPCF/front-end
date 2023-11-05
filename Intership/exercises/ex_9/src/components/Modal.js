import { createPortal } from "react-dom"
import { ModalDiv, Close } from "./styledCM"
import './style.css'
export default function Modal({ open, children, setIsOpen, ref }) {
    //if (!open) return null
    const modal_contnet = {
        position: 'fixed',
        bacgroundColor: 'rgba(0,0,0,.7)'
    }
    return createPortal(
        <>
        {open &&
            <ModalDiv className="modal-content modal" style={modal_contnet} onClick={e => e.stopPropagation()}>
                <Close onClick={setIsOpen}>&times;</Close>
                <div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </ModalDiv>
            }
        </>,
        document.getElementById('portal')
    )
}