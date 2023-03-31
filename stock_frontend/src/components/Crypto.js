import React, { useState } from 'react'
// import './styles/Crypto.css'
import axios from 'axios'
import { useEffect } from 'react'
import Card from './Card'
import '../styles/Crypto.css'
import Navbar from './Navbar'
import Footer2 from './Footer2'
import CryptoMiddle from './CryptoMiddle'
function Crypto() {
    const [coinList, setCoinList] = useState([])
    useEffect(() => {
        axios.get('https://fmpcloud.io/api/v3/quotes/crypto?apikey=ada5ba7d6c2747c4c5851754a3419605')
            .then((res) => {
                setCoinList(res.data);
                console.log(res.data);
            }
            )
    }, [])

    return (
        <>
        <Navbar/>
        <CryptoMiddle/>
        <div className='Crypto'>
            
            {
                coinList.map((item, index) => (
                    <Card key={item.symbol} index={index} symbol={item.symbol} name={item.name} price={item.price} volume={item.volume} category='Crypto' />
                ))
            }
        </div>
        <Footer2/>
        </>
    )
}

export default Crypto