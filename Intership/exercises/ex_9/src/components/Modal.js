import { createPortal } from "react-dom"
import { ModalDiv, Close } from "./styledCM"
export default function Modal({ open, children, onClose, ref }) {
    if (!open) return null
    const modal_contnet = {
        position: 'fixed',
        bacgroundColor: 'rgba(0,0,0,.7)'
    }
    return createPortal(
        <>

            <ModalDiv className="modal-content modal" ref={ref} style={modal_contnet} onClick={e => {
                if (e.target.className === 'modal-content') {
                    onClose('hello world')
                }
            }
            }
            >
                <Close onClick={onClose}>&times;</Close>
                <div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </ModalDiv>
        </>,
        document.getElementById('portal')
    )
}