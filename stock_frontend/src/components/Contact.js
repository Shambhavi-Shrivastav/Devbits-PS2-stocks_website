import React from 'react'
import Navbar from './Navbar'
import Footer2 from './Footer2'
import '../styles/Contact.css'

const Contact = () => {
    return (

        <div>
            <Navbar />
            <div className='Query'>
                Have Any Query..
            </div>
            <div className="main">
                <div className="cnt-form-details">
                    <div className="left-from">
                        <p className="whiteus-text1">Contact information</p>
                        <div className="form-data">
                            <div className="form-data-left"><img className="img-fluid " width="18" height="18" src="phone-call.png" />
                                <span className="svgpadding">Phone</span>
                            </div>
                            <div className="form-data-right">
                                <p className="form-right-text">+91 9020356491</p>
                            </div>
                        </div>
                        <div className="form-data">
                            <div className="form-data-left">
                                <img className="img-fluid " width="18" height="18" src="time.png"/> <span className="svgpadding"> Open</span>
                            </div>
                            <div className="form-data-right">
                                <p className="form-right-text">Between 9:30 AM to 6:30 PM<br />Monday to Saturday</p>
                            </div>
                        </div>
                        <div className="form-data">
                            <div className="form-data-left"><img className="img-fluid " width="18" height="18" src="email.png" />
                                <span className="svgpadding"> Email</span>
                            </div>
                            <div className="form-data-right">
                                <p className="form-right-text">customercare@stockblock.com</p>
                            </div>
                        </div>
                        <div className="form-data">
                            <div className="form-data-left">
                                <img className="img-fluid " width="18" height="18" src="placeholder.png" />
                                <span className="svgpadding">Office</span>
                            </div>
                            <div className="form-data-right">
                                <p className="form-right-text">Vaishnavi Tech Park, 3rd Floor, Sarjapur Main Road, Bellandur
                                Bengaluru – 560103</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-form form">
                        <p className="whiteus-text">Write to Us</p>
                        <form autocomplete="off" className="">
                            <div className="row_fname">
                                <div className="mb-3_formgrp"><label className="formlabel form-label" for="formBasicEmail">First Name <span
                                    className="warning">*</span> </label>
                                    <input name="firstName" type="text" id="formBasicEmail" className="formcontrol form-control" /><span
                                        className="text-danger"> </span>
                                </div>
                                <div className="mb-3_formgrp"><label className="formlabel form-label" for="formBasicPassword"> Last Name <span
                                    className="warning">*</span> </label>
                                    <input name="lastName" type="text" id="formBasicPassword" className="formcontrol form-control" /><span
                                        className="text-danger"> </span>
                                </div>
                            </div>
                            <div className="row2_email">
                                <div className="mb-3_formgrp">
                                    <label className="formlabel form-label" for="formBasicEmail">Email <span className="warning">*</span></label>
                                    <input name="email" type="text" id="formBasicEmail" className="formcontrol form-control" /><span
                                        className="text-danger"> </span>
                                </div>
                                <div className="mb-3_formgrp"><label className="formlabel form-label" for="formBasicPassword"> Mobile Number <span
                                    className="warning">*</span> </label>
                                    <input pattern="\d*" maxlength="10" name="mobile" type="text" id="formBasicPassword"
                                        className="formcontrol form-control" /><span className="text-danger"> </span>
                                </div>
                            </div>
                            <label className="formlabel_mt-5"> Your Question <span class="warning">*</span></label>
                            <div className=" messagefield">
                                <textarea class="messagearea" name="question"></textarea><span class="text-danger"> </span>
                            </div>
                            <div className="uploadbtn mt-3 d-flex align-items-center">
                                <div className="feel-msg"></div><button type="submit" class="btn-bg sendbtn  btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Contact
