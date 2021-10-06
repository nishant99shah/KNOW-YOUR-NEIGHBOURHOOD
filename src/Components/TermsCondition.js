import React, { Component } from 'react';
import Header from './Header';
import Header1 from './Header1';

class TermsCondition extends Component {

    render() {
        return(
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
				height: "1560px",
			}}>

				<Header></Header>
                <Header1></Header1>
			
                   <div className = "container-fluid" style={{paddingTop:"230px"}}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" 
                                style={{
                                    backgroundColor:"lightgrey", 
                                    border:"black 10px", 
                                    alignItems:"center", 
                                    height: "1140px", 
                                    borderRadius:"20px",
                                    width:"1225px",
                                    margin:"50px 0px 50px 155px"
                                }}>

                               <div style={{marginTop: "60px"}}>
                                    <h3 style={{fontSize: "40px"}}>Terms and Condition</h3>
                               </div>

                               <div style={{width:"1000px", marginTop:"45px", float: "left", fontWeight: "500", textAlign:"left"}}>
                                   <h4 style={{fontSize: "26px", }}>Welcome to Know Your Neighbourhood!</h4>
                                   <p style={{fontSize:"17px", textAlign:"justify"}}>These terms and conditions outline the rules and regulations for the use of Know Your Neighbourhood's Website, located at http://localhost:3000/home.

By accessing this website we assume you accept these terms and conditions. Do not continue to use Know Your Neighbourhood if you do not agree to take all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

                                <h4 style={{fontSize: "26px", marginTop:"20px" }}>Cookies</h4>   
                                <p style={{fontSize:"17px", textAlign:"justify"}}>We employ the use of cookies. By accessing Know Your Neighbourhood, you agreed to use cookies in agreement with the Know Your Neighbourhood's Privacy Policy.

Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                                <h4 style={{fontSize: "26px", marginTop:"20px" }}>License</h4> 
                                <p style={{fontSize:"17px", textAlign:"justify"}}>Unless otherwise stated, Know Your Neighbourhood and/or its licensors own the intellectual property rights for all material on Know Your Neighbourhood. All intellectual property rights are reserved. You may access this from Know Your Neighbourhood for your own personal use subjected to restrictions set in these terms and conditions.</p>
                                <h4 style={{fontSize: "26px", marginTop:"20px" }}>Content Liability</h4> 
                                <p style={{fontSize:"17px", textAlign:"justify"}}>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
                                <h4 style={{fontSize: "26px", marginTop:"20px" }}>Reservation of Rights</h4> 
                                <p style={{fontSize:"17px", textAlign:"justify"}}>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
                                    
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


			)
    }
}

export default TermsCondition;