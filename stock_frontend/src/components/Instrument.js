import React from 'react'
import InstrumentsCard from './InstrumentsCard'
import '../styles/Instrument.css'
const Instrument = ({ items }) => {
    return (
        <div className='instrument'>
            {
                items.map((item, index) => (
                    <InstrumentsCard key={item.img} index={index} img={item.img} name={item.name} href={item.href} Description={item.Description} />
                ))
            }
        </div>
    )
}

export default Instrument
