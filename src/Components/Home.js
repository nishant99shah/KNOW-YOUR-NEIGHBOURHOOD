import React, { Component } from 'react';
import Header from './Header';
import Header1 from './Header1';

class Home extends Component {
    constructor(props) {
		super(props);

		this.home = this.home.bind(this);
		this.about = this.about.bind(this);
		this.contact = this.contact.bind(this);
		this.terms = this.terms.bind(this);
		this.register = this.register.bind(this);
		this.login = this.login.bind(this);
	}

	home() {
		this.props.history.push(`/home`);
	}

	about() {
		this.props.history.push(`/about`);
	}

	contact() {
		this.props.history.push(`/contact`);
	}

	terms() {
		this.props.history.push(`/terms`);
	}
	
	register() {
		this.props.history.push(`/register`);
	}

	login() {
		this.props.history.push(`/login`);
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
                    height: "722px",
                }}>
				
			<div>
			   <Header1></Header1>
				<Header></Header>
			</div>
					<div className="main-body">			
						<h1 style={{ textAlign: "center", paddingTop:"230px", fontSize:"60px", fontWeight:"bold", color:"white" }}>
							Welcome to <br></br>Know Your Neighbourhood
						</h1>
						<button
							className='btn btn-primary'
							style={{ width: "25%", marginTop:"100px", borderRadius: "50px", height:"50px" }}
							onClick={this.register}
						>
							{" "}
							Get Started
						</button>
					</div>

					<div style={{ marginLeft: "2%", marginTop:"150px", color:"white"}}>
							<h3 className='footer'>
								Know Your Neighbourhood Pvt. Ltd.
							</h3>
					</div>

				</div>			
			
		);
	}
}

export default Home;