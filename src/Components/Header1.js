import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import kyn1 from '../Images/kyn1.png';
import kyn from '../Images/kyn.png';
import AuthService from '../Services/AuthService';

class Header extends Component {

  constructor(props){
		super(props);
		this.logout = this.logout.bind(this);

		this.state = {
			currentUser: false,
		};
	}

	componentDidMount() {
		const user = AuthService.getCurrentUser();

		if (user) {
			this.setState({
				currentUser: user,
			});
		}
	}

	logout() {
		AuthService.logout();
	}

    render() {
        return (
            <div>
            <nav className='navbar navbar-expand-md navbar' bg="dark" variant="dark" style={{width: "80%", height: "150px", float:"left", marginBottom:"80px"}}>
				
          <nav style={{ width:"40%" }}>
          <img alt="logo" src={kyn1} height="100%" className="d-inline-block align-top" style={{ marginLeft: "-150px", width:"160px"}}/>
					</nav>

					<nav style={{ width:"10%", height:"100%" }}>
            <div style={{paddingTop: "40px"}}>
						<button className="btn btn-outline-primary" style={{width:"110px", backgroundColor:"white", height:"45px"}}>
							<Link to={"/home"} className='navbar-brand' className="d-inline-block align-top" style={{ textDecoration: "none", fontWeight:"bold" }}>
								Home
							</Link>
						</button>
						</div>
					</nav>

					<nav style={{ width:"10%", height:"100%" }}>
					<div style={{ paddingTop: "40px"}}>
						<button className="btn btn-outline-primary" onClick={this.about} style={{width:"110px", backgroundColor:"white", height:"45px"}}>
							<Link to={"/about"} className='navbar-brand' className="d-inline-block align-top" style={{ textDecoration: "none", fontWeight:"bold" }}>
								About Us
							</Link>
						</button>
						</div>
					</nav>

					<nav style={{ width:"10%", height:"100%" }}>
						<div style={{ paddingTop: "40px"}}>
						<button className="btn btn-outline-primary" onClick={this.contact} style={{width:"110px", backgroundColor:"white", height:"45px"}}>
							<Link to={"/contact"} className='navbar-brand' className="d-inline-block align-top" style={{ textDecoration: "none", fontWeight:"bold" }}>
								Contact Us
							</Link>
						</button>
						</div>
					</nav>

					<nav style={{ width:"10%", height:"100%" }}>
						<div style={{ paddingTop: "40px"}}>
						<button className="btn btn-outline-primary" onClick={this.terms} style={{width:"110px", backgroundColor:"white", height:"45px"}}>
							<Link to={"/terms"} className='navbar-brand' className="d-inline-block align-top" style={{ textDecoration: "none", fontWeight:"bold" }}>
								T & C
							</Link>
						</button>
						</div>
					</nav>
				
					<nav style={{ width:"10%", height:"100%"}}>
          {this.state.currentUser==false && 
						(<div style={{ paddingTop: "40px" }}>		
						<button className="btn btn-outline-primary" style={{width:"110px", backgroundColor:"white", height:"45px"}}>
							<Link to={"/register"} className='navbar-brand' className="d-inline-block align-top" style={{ textDecoration: "none", fontWeight:"bold" }}>
									REGISTER
							</Link>
						</button>		
						</div>)}
					</nav>

					<nav style={{ width:"10%", height:"100%" }}>
          {this.state.currentUser==false && 
						(<div style={{ paddingTop: "40px"}}>
						<button className="btn btn-outline-primary" style={{width:"110px", backgroundColor:"white", height:"45px"}}>
							<Link to={"/login"} className='navbar-brand' className="d-inline-block align-top" style={{ textDecoration: "none", fontWeight:"bold" }}>
								LOGIN
							</Link>
						</button>
						</div>)}
					</nav>
				

					

				</nav>
			</div>
        );
    }
}

export default Header;