import React from 'react'
import '../styles/AboutCard.css'

const AboutCard = ({ img, index, name, Description }) => {
    return (
        <div className='aboutcard'>
            <div className='h'>
                <p className='nm'>{name}</p>
                <p className='ds'>{Description}</p>
            </div>
            <div >
                <img className='img' src={img} alt={`${index} product`} />
            </div>
        </div>
   
    )
}

export default AboutCard
