import React from 'react'
import '../styles/Footer2.css'


const Footer2 = () => {
    return (
        <div>
            <div className='footer'>
        
                <div>
                    <p id='head'>PRODUCTS</p>
                    <a id='cont' href="./instruments/stocks">Stocks<br/><br/></a>
                    <a id='cont' href="./instruments/mutualfunds">Mutual Funds<br/><br/></a>
                    <a id='cont' href="./instruments/bonds">Bonds<br/><br/></a>
                    <a id='cont' href="./instruments/crypto">Crypto<br/><br/></a>
                </div>

                <div>
                    <p id='head'>STOCKBLOCK</p>
                    <a id='cont' href="./About">About Us<br/><br/></a>
                    <a id='cont' href="./Career">Careers<br/><br/></a>
                    <a id='cont' href="./Help">Help and Support<br/><br/></a>
                    <a id='cont' href="./Blog">Blog<br/><br/></a>

                </div>

                <div >
                    <p id='head'>CONTACT</p>
                    <p id='contact'>Vaishnavi Tech Park, 3rd Floor</p>
                    <p id='contact'>Sarjapur Main Road, Bellandur</p>
                    <p id='contact'>Bengaluru – 560103</p>
                    <p id='contact'>Contact us - 9929455930</p>
                    <div className='icons'>
                        <img src='./link.png'/><img src='./twit.png'/><img src='./face.png'/><img src='./insta.png'/>
                    </div>
                </div>

            </div>
            

        </div>
    )
}

export default Footer2
