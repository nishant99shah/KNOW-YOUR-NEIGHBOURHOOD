import React, { Component } from 'react';
import Header from './Header';
import Header1 from './Header1';

class Contact extends Component {

    render() {
        return (
            <div style={{
                backgroundImage: "url('https://i.pinimg.com/originals/30/94/3a/30943a627d8aed0abbf156da6300d3e6.jpg')",
                opacity: "0.9",
                fontWeight: "bolder",
                color: "black",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: "-1",
                width: "100%",
                height: "1120px",
            }}>

                <div>
                    <Header1></Header1>
                    <Header></Header>
                </div>
                <div className="container-fluid" style={{ paddingTop: "230px" }}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3"
                            style={{
                                backgroundColor: "lightgrey",
                                border: "black 10px",
                                alignItems: "center",
                                height: "700px",
                                borderRadius: "20px",
                                width: "1225px",
                                margin: "50px 0px 50px 155px"
                            }}>

                            <div style={{ marginTop: "60px" }}>
                                <h3 style={{ fontSize: "40px", }}>Contact Us</h3>
                            </div>

                            <div style={{ width: "1200px" }}>

                                <div className="card col-md-6 offset-md-3 offset-md-3"
                                    style={{
                                        height: "400px",
                                        width: "370px",
                                        margin: "70px 0px 0px 80px",
                                        alignSelf: "start",
                                        float: "left"
                                    }}
                                >

                                    <h3 className="card title" style={{ marginTop: "30px", marginBottom: "30px", border: "0", fontSize: "30px", color: "red", textDecoration: "underline" }}>Contact Here</h3>
                                    <div className="card body" style={{ border: "0" }}></div>

                                    <h4 style={{ margin: "0 0 0 35px", textAlign: "left", color: "blue", fontSize: "22px" }}>Phone:</h4>
                                    <p style={{ textAlign: "left", margin: "5px 0 50px 35px" }}>+91-1290428322</p>
                                    <h4 style={{ margin: "0px 0 0px 35px", textAlign: "left", color: "blue", fontSize: "22px" }}>Email ID:</h4>
                                    <p style={{ textAlign: "left", margin: "5px 0 50px 35px" }}>knowyourneighbour@gmail.com</p>
                                    <h4 style={{ margin: "0 0 0 35px", textAlign: "left", color: "blue", fontSize: "22px" }}>Address:</h4>
                                    <p style={{ textAlign: "left", margin: "5px 0 50px 35px" }}>Lithan, Mumbai, India</p>
                                </div>

                                <div className="card col-md-6 offset-md-3 offset-md-3 "
                                    style={{
                                        height: "400px",
                                        width: "580px",
                                        margin: "70px 80px 0px 0px",
                                        alignSelf: "start",
                                        float: "right"
                                    }}

                                >

                                    <div className="google-map-code">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.799442472441!2d72.8478911147304!3d19.116452387064726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9cd178b9819%3A0x6663b06e1b11aad!2sLithan%20Mumbai!5e0!3m2!1sen!2sin!4v1622934577233!5m2!1sen!2sin"
                                            width="580" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>

                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>

                </div>

                <div style={{ marginLeft: "2%", marginTop: "50px", color: "white" }}>
                    <h3 className='footer'>
                        Know Your Neighbourhood Pvt. Ltd.
					</h3>
                </div>

            </div>

        );
    }
}

export default Contact;