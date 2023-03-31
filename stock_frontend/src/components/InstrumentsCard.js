import React from 'react'
import '../styles/InstrumentsCard.css'
const InstrumentsCard = ({ img, index, name, href, Description }) => {
    return (
        <div className='InstrumentsCard'>
            <img src={img} alt={`${index} product`} />
            <div className='name'>
                <a href={href} >{name}</a>
            </div>
            <p className='des'>{Description}</p>
        </div>
    )
}

export default InstrumentsCard
