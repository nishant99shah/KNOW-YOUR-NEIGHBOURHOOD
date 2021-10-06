import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <nav className='navbar navbar-expand-md navbar' bg="dark" variant="dark" style={{width: "20%", height: "150px", float:"right" }}>
				
					

					<nav style={{ width:"50%", height:"37%" }}>
						{this.state.currentUser && 
						(<div style={{ }}>
						<button className="btn btn-outline-primary" style={{width:"110px", backgroundColor:"white", height:"45px"}}>
							<Link to={"/dashboard"} className='navbar-brand' className="d-inline-block align-top" style={{ textDecoration: "none", fontWeight:"700" }}>
								Dashboard
							</Link>
						</button>
						</div>)}
					</nav>

					<nav style={{ width:"50%", height:"37%" }}>
						{this.state.currentUser && 
						(<div style={{}}>
						<button className="btn btn-outline-primary" style={{width:"110px", backgroundColor:"white", height:"45px"}}>
							<Link to={"/login"} className='navbar-brand' onClick={this.logout} className="d-inline-block align-top" style={{ textDecoration: "none", fontWeight:"700" }}>
								Logout
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