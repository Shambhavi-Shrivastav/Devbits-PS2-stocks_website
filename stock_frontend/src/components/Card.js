import React from 'react'
import '../styles/Card.css'
import { useState } from 'react'

export default function Card({ symbol, name, price, volume,category }) {

    const [item, setItem] = useState({
        quanity:""
    });

    const handleInput = (e) => {
        console.log(e)
        setItem({ ...item, [e.target.name]: e.target.value })
    }

    const handleBuy = async (e) => {
        e.preventDefault();

        const res = await fetch('/item/buyitem/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity:item.quantity,
                name:name,
                volume:volume,
                price:price,
                symbol:symbol,
                category:category
            })
        })
        const data = await res.json()

        if (!data) {
            window.alert("Not a valid financial instrument")
            console.log("Not a valid financial instrument")
        }
        else {
            window.alert("Successfull trade")
            console.log("Successfull trade")
        }
    }

    const handleSell = async (e) => {
        e.preventDefault();

        const res = await fetch('/item/sellitem/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                quantity:item.quantity,
                name:name,
                price:price,
                symbol:symbol,
                category:category
            })
        })
        const data = await res.json()

        if (!data) {
            window.alert("Not a valid financial instrument")
            console.log("Not a valid financial instrument")
        }
        else {
            window.alert("Successfull trade")
            console.log("Successfull trade")
        }
    }
    return (
        <div className='cards'>
            <p>{symbol}</p>
            <p>{name}</p>
            <p>PRICE </p>
            <p>{price}</p>
            <p>VOLUME</p>
            <p>{volume}</p>
            <lable>QTY</lable>
            <input type='Number' autoComplete='off' placeholder='Quantity' name='quantity' value={item.quantity} onChange={handleInput} required ></input>
            <button className='button' onClick={handleBuy}>
                BUY
            </button>
            <button className='button' onClick={handleSell}>
                SELL
            </button>
        </div>
    )
}

