import React, { Component } from 'react';
import AuthService from '../Services/AuthService';
import FacebookLogin from 'react-facebook-login';  
import Header from './Header';
import Header1 from './Header1';

class Login extends Component {

	constructor(props){
		super(props)

		this.state={
			userName:'',
			password:'',
			error_message:'',
			user:false,

			
		}
	}


	changeUserNameHandler=(event)=>{
		event.preventDefault();
		this.setState({userName:event.target.value});
	}

	changePasswordHandler=(event)=>{
		event.preventDefault();
		this.setState({password:event.target.value});
	}

	login = (e) => {
        e.preventDefault();

        let user={
            userName:this.state.userName,
            password:this.state.password
        };
		AuthService.login(user).then(
			() => {
				this.props.history.push("/dashboard");
				window.location.reload();
			},
			(error) => {
				const resMessage =
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString();

				this.setState({
					error_message: resMessage,
				});
			}
		);

    

    }

    cancel=(e)=>{
        this.props.history.push('/');
    }

	facebookResponse = (response) => {
		localStorage.setItem("user", JSON.stringify(response));
		this.setState({ ...this.state, user: response });
		this.props.history.push("/facebookdash");
	};

	render(){
		const componentClicked = () => {     console.log("Clicked!"); };

        const LoginButton = ({ facebookResponse }) => (
            <FacebookLogin
				appId="938951783594566"
				appSecret="26aa787cbd157966a8142d0fef044f7b"
				//autoLoad
				fields="name,email,picture"
				onClick={componentClicked}
				callback={facebookResponse} />
      		  );
		
				
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
				height: "1170px",
			}}>

				<Header></Header>
				<Header1></Header1>
			
                   <div className = "container-fluid" style={{paddingTop:"230px"}}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"lightgrey", border:"black 10px", marginTop:"50px", marginBottom:"50px", alignItems:"center", height: "750px", borderRadius:"20px" }}>
                                <div className = "card-body">
                                <h1 style={{paddingLeft:"0px", paddingTop:"30px", }}>LOGIN HERE</h1>

                                    <form style={{marginTop:"45px", width:"700px", }}>

                                    <div className = "form-group">
                                          {this.state.error_message && <div className="alert alert-danger" role="alert"> {this.state.error_message}</div>}
                                          
                                        </div>
									
                                       
                                        <div className = "form-group">
                                            <label style={{marginLeft: "-460px", marginBottom: "10px"}}> Username: </label>
                                            <input placeholder="Enter Your Username" type="Username" name="Username" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            onChange={this.changeUserNameHandler} />
                                        </div>
                                        <br></br>
                                        <div className = "form-group" style={{marginTop: "10px"}}>
                                            <label style={{marginLeft: "-463px", marginBottom: "10px"}}> Password: </label>
                                            <input placeholder="Enter Your Password" type="password" name="password" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            onChange={this.changePasswordHandler} />
                                        </div>
                                        <br></br><br></br>

                                        <button className="btn btn-success" onClick={this.login} >Sign In</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "110px"}}>Cancel</button>
										<br></br>
										<br></br>

										<h4 style={{marginTop: "25px"}}>DON'T HAVE AN ACCOUNT? <a href="/register" style={{textDecoration:"none", color: "red", }}> REGISTER HERE </a></h4>
									
										<h4 style={{marginTop: "35px"}}>OR</h4>

										<div style={{ marginTop: "5%" }}>

											{this.state.user == false && (
											<LoginButton facebookResponse={this.facebookResponse} />
											)}    

										</div>

									</form>
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

export default Login;
