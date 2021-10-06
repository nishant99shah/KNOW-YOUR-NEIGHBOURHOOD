import React, { Component } from "react";
import Header from "./Header";
import Header1 from "./Header1";

class Facebook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
		};
	}

	componentDidMount() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) {
			this.setState({ user: user });
		}
	}
	render() {
		const UserScreen = ({ user }) => (
			<>
				<div
					style={{
						display: "flex-column",
						justifyContent: "space-between",
						alignItems: "center"
					}}
				>
					<img
						src={user.picture.data.url}
						height="10%"
						width="10%"
						alt="avatar"
						
						style={{ borderRadius: "50%",float:"left", marginLeft:"60px", marginTop:"60px" }}
					/>
					<h1 style={{marginTop:"60px"}}>Welcome {user.name}!</h1>
					<p style={{marginBottom:"60px"}}>{user.email}</p>
				</div>
			</>
		);
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
				height: "720px",
			}}>
			<div>
				<Header></Header>
				<Header1></Header1>
				
				{this.state.user && (
					<div className="card col-md-6 offset-md-3 offset-md-3 border-primary">
						<UserScreen user={this.state.user} />
					</div>
				)}
			</div>
					<div style={{ marginLeft: "2%", marginTop:"250px", color:"white"}}>
							<h3 className='footer'>
								Know Your Neighbourhood Pvt. Ltd.
							</h3>
					</div>
			</div>
		);
	}
}

export default Facebook;