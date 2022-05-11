import { height } from '@mui/system'
import React from 'react'
import './Modal.css'
import reactDom from 'react-dom'
// import NewGallery from './NewGallery'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
    height: '75%',
    width: '75%'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0 .2)',
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return reactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
