import React, { Component } from 'react';
import Header from './Header';
import Header1 from './Header1';

class About extends Component {

    constructor(props) {
		super(props);

	}


    render() {
        return (
			<div style={{
                    backgroundImage:"url('https://i.pinimg.com/originals/30/94/3a/30943a627d8aed0abbf156da6300d3e6.jpg')",	
					opacity:"0.9",
					fontWeight:"bolder",
					color:"black",			
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: "-1",
                    width: "100%",
                    height: "1700px",
                }}>
				
			<div>
                <Header1></Header1>
				<Header></Header>
                
			</div>
            <div className = "container-fluid" style={{paddingTop:"230px"}}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" 
                                style={{
                                    backgroundColor:"lightgrey", 
                                    border:"black 10px", 
                                    alignItems:"center", 
                                    height: "1270px", 
                                    borderRadius:"20px",
                                    width:"1225px",
                                    margin:"50px 0px 50px 155px"
                                }}>

                               <div style={{marginTop: "60px"}}>
                                    <h3 style={{fontSize: "40px", }}>About Us</h3>
                               </div>

                               <div style={{width:"1000px", marginTop:"45px", float: "left", fontWeight: "500", textAlign:"left"}}>
                                   <h4 style={{fontSize: "26px", textAlign:"center", textDecoration:"underline"}}>About Our Company</h4>
                                   <p style={{fontSize:"17px", textAlign:"justify", marginTop:"30px"}}>Welcome to Know Your Neighbourhood, your number one source for all stores. We're dedicated to giving you the very best of stores, with a focus on name, their phone number and their locality.</p>


                                   <p style={{fontSize:"17px", textAlign:"justify"}}>Founded in 2021 by ABC, Know Your Neighbourhood has come a long way from its beginnings in India. When ABC first started out, their passion for "Best Stores you can get among your neighbourhood" drove them to do research so that Know Your Neighbourhood can offer you the most highly rated popular stores from people. We now serve customers all over India, and are thrilled that we're able to turn our passion into our own website.</p>


                                   <p style={{fontSize:"17px", textAlign:"justify"}}>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>


                                   <p style={{fontSize:"17px", textAlign:"justify", margin:"50px 0px 5px 0px"}}>Sincerely,</p>

                                   <p style={{fontSize:"17px", textAlign:"justify", margin:"0px"}}>ABC</p>      

                                   <p>(Know Your Neighbourhood Founder)</p>
                                            
                               </div>

                               <div>

                                    <h4 style={{fontSize:"26px",marginTop:"50px", marginBottom:"40px", textAlign:"center", textDecoration:"underline"}}>Gallery</h4>
                                    <div id="demo" className="carousel slide" data-ride="carousel" style={{width:"800px"}}>

                                          
                                            
                                            
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRlYW13b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                                 alt="Team members" width="1100" height="470" />
                                                </div>
                                                <div className="carousel-item">
                                                <img src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW13b3JrfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" 
                                                alt="Chicago" width="1100" height="470" />
                                                </div>
                                                <div className="carousel-item">
                                                <img src="http://tlt.cofc.edu/files/2016/05/Group-Research-Project-10cg5tf.jpg" 
                                                alt="New York" width="1100" height="470" />
                                                </div>
                                            </div>
                                            
                                           
             
                                            </div>

                               </div>
                            </div>
                        </div>

                   </div>

                   <div style={{ marginLeft: "2%", marginTop:"50px", color:"white"}}>
							<h3 className='footer'>
								Know Your Neighbourhood Pvt. Ltd.
							</h3>
					</div>

				</div>			
			
		);
    }
}

export default About;