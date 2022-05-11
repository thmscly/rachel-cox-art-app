import React from 'react'
// import CloseIcon from '@mui/icons-material/Close';
import Img1 from '/Users/thomascox/Desktop/Rachel-Cox-Art/rachel-cox-art/src/Images/rachel-cox-art-bee.JPG'
import Img2 from '/Users/thomascox/Desktop/Rachel-Cox-Art/rachel-cox-art/src/Images/rachel-cox-art-chameleon.jpg'
import Img3 from '/Users/thomascox/Desktop/Rachel-Cox-Art/rachel-cox-art/src/Images/rachel-cox-art-door.JPG'
// import Img4 from '/Users/thomascox/Desktop/Rachel-Cox-Art/rachel-cox-art/src/Images/rachel-cox-art-gun.JPGG'
import Img5 from '/Users/thomascox/Desktop/Rachel-Cox-Art/rachel-cox-art/src/Images/rachel-cox-art-mule.JPG'
import Img6 from '/Users/thomascox/Desktop/Rachel-Cox-Art/rachel-cox-art/src/Images/rachel-cox-art-rope.JPG'
import './NewGallery.css'
import { useState } from 'react'
// import PaymentForm from './PaymentForm'
import Modal from './Modal'
import './Modal.css'
// import { setState } from 'react'
// import Modal from './components/Modal'
// import Popup from './components/Popup.js'

export default function NewGallery() {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
            about: "The Bee. 2021. Alcohol Marker. $30."
        },
        {
            id: 2,
            imgSrc: Img2,
            about: "The Chameleon. 2021. Alcohol Marker. $30."
        },
        {
            id: 3,
            imgSrc: Img3,
            about: "The Bee. 2021. Alcohol Marker. $30."
        },
        // {
        //     id: 4,
        //     imgSrc: Img4,
        //     about: "The Bee. 2021. Alcohol Marker. $30."
        // },
        {
            id: 5,
            imgSrc: Img5,
            about: "The Bee. 2021. Alcohol Marker. $30."
        },
        {
            id: 6,
            imgSrc: Img6,
            about: "The Bee. 2021. Alcohol Marker. $30."
        },
    ]

    const [clicked, setClicked] = useState(false)
    return (
        <div className='gallery'>
            {data.map((item, index) => {
                return (
                    <div className='galleryContainer'>
                        <div className='pics' key={index}>
                            <img src={item.imgSrc} style={{ width: '100%' }} alt="Rachel Cox Art" />
                            <div className='imgAbout'>{item.about}</div>
                            <button className='buyButton' onClick={() => setClicked(true)} key={index}>Buy Now</button>
                            <Modal open={clicked} onClose={() => setClicked(false)}>
                                <div className='modalImage' key={index}>

                                </div>
                            </Modal>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}