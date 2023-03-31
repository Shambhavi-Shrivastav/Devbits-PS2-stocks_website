import React from 'react'
import AboutCard from './AboutCard'
import Footer2 from './Footer2'
import Navbar from './Navbar'
import Aboutmiddle from './Aboutmiddle'

const About = ({ aboutitems }) => {
    return (
        <div >
        <Navbar/>
        <Aboutmiddle/>
        <div className='about'>
            {
                aboutitems.map((item, index) => (
                    <AboutCard key={item.img} index={index} img={item.img} name={item.name} Description={item.Description} />
                ))
            }
        </div>
        <Footer2/>
        </div>
    )
}

export default About