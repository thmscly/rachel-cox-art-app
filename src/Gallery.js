import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Img1 from './Artwork/rachel-cox-art-birds-of-paradise.png'
import Img2 from './Artwork/rachel-cox-art-butterfly.png'
import Img3 from './Artwork/rachel-cox-art-chameleon.png'
import Img4 from './Artwork/rachel-cox-art-lilly.png'
import Img5 from './Artwork/rachel-cox-art-marlin.png'
import Img6 from './Artwork/rachel-cox-art-orangutan.png'
import Img7 from './Artwork/rachel-cox-art-orchid.png'
import Img8 from './Artwork/rachel-cox-art-orchids.png'
import Img9 from './Artwork/rachel-cox-art-pineapple.png'
import Img10 from './Artwork/rachel-cox-art-toucan.png'
import Img11 from './Artwork/rachel-cox-art-pineapple-bleedthrough.png'
import './Gallery.css'
import { useState } from 'react'
// import Modal from './components/Modal'
// import Popup from './components/Popup.js'
import { Link } from 'react-router-dom'

export default function Gallery() {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
            about: "'Birds of Paradise.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 2,
            imgSrc: Img2,
            about: "'The Butterfly.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 3,
            imgSrc: Img3,
            about: "'The Chameleon.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 4,
            imgSrc: Img4,
            about: "'The Lily.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 5,
            imgSrc: Img5,
            about: "'The Marlin.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 6,
            imgSrc: Img6,
            about: "'The Orangutan.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 7,
            imgSrc: Img7,
            about: "'The Orchid.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 8,
            imgSrc: Img8,
            about: "'The Orchids.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 9,
            imgSrc: Img9,
            about: "'The Pineapple.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 10,
            imgSrc: Img10,
            about: "'The Toucan.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        {
            id: 11,
            imgSrc: Img11,
            about: "'The Pineapple Bleedthrough.' 2021. Alcohol Marker. $30.",
            price: 30,
            link: 'https://buy.stripe.com/14kbMA8EQ6VH9ckbII'
        },
        // {
        //     id: 12,
        //     imgSrc: Img12,
        //     about: "The Bee. 2021. Alcohol Marker. $30.",
        //     price: 30
        // },
    ]

    const openLink = () => {
        window.open("{data.link}");
    }

    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');



    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <div className='gallery'>
                {data.map((item, index) => {
                    return (
                        <div className='galleryContainer'>
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{ width: '100%' }} alt="Rachel Cox Art" />
                                <div className='imgAbout'>{item.about}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="" />
                <button>
                    Add to Cart
                </button>
                <CloseIcon onClick={() => setModel(false)} />
            </div>
        </>
    )
}
