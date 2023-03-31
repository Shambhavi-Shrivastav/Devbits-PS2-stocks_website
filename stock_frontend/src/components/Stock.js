import React, { useState } from 'react'
// import './styles/Crypto.css'
import axios from 'axios'
import { useEffect } from 'react'
import Card from './Card'
import '../styles/Crypto.css'
import Navbar from './Navbar'
import Footer2 from './Footer2'
import StockMiddle from './StockMiddle'
import '../styles/Stock.css'


function Stock() {
    const [stockList, setStockList] = useState([])
    useEffect(() => {
        axios.get('https://fmpcloud.io/api/v3/stock-screener?marketCapMoreThan=1000000000&limit=100&apikey=ada5ba7d6c2747c4c5851754a3419605')
            .then((res) => {
                setStockList(res.data);
                console.log(res.data);
            }
            )
    }, [])

    return (
        <>
        <Navbar/>
        <StockMiddle/>
        <div className='Stock'>
            
            {
                stockList.map((item, index) => (
                    <Card key={item.symbol} index={index} symbol={item.symbol} name={item.companyName} price={item.price} volume={item.volume} category='Stock'/>
                ))
            }
        </div>
        <Footer2/>
        </>
    )
}

export default Stock