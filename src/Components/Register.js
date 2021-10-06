import React, { Component } from 'react';
import AuthService from '../Services/AuthService';
import Header from './Header';
import Header1 from './Header1';


class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            userName: '',
            email: '',
            password: ''  
        }
    }
    
    changeFnameHandler= (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({fname: event.target.value});
    }


    changeLnameHandler= (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({lname: event.target.value});
    }


    changeUserNameHandler= (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({userName: event.target.value});
    }

    changeEmailHandler= (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({email: event.target.value});
    }

    changePasswordHandler= (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({pass: event.target.value});
    }
   
     saveUser = (e) => {

        e.preventDefault();
        console.log('this is register method');

        let users = {
            fname:this.state.fname,
            lname:this.state.lname,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.pass,
        };

        AuthService.addUser(users).then((res) => {
            console.log("create component" + JSON.stringify(res.data));
            this.props.history.push("/");
        });
     };


    cancel = (e) => {
        this.props.history.push('/');
    };

    render() {
        return (
           
            
            <div className="mybg" style={{
				backgroundImage:"url('https://i.pinimg.com/originals/30/94/3a/30943a627d8aed0abbf156da6300d3e6.jpg')",	
				opacity:"0.9",
				fontWeight:"bolder",
				color:"black",			
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				zIndex: "-1",
				width: "100%",
				height: "1160px",
                overflow: "hidden",
			}}>
                <Header></Header>
                <Header1></Header1>

                <div className = "container-fluid" style={{paddingTop:"230px"}}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"lightgrey", border:"black 10px", marginTop:"50px", marginBottom:"50px", alignItems:"center", height: "845PX", borderRadius:"20px" }}>
                                <div className = "card-body">
                                <h1 style={{paddingLeft:"0px", paddingTop:"30px", }}>REGISTER HERE</h1>

                                    <form style={{marginTop:"45px", width:"700px", }}>

                                    <div className = "form-group">
                                          {this.state.error_message && <div className="alert alert-danger" role="alert"> {this.state.error_message}</div>}
                                          
                                        </div>
									
                                       
                                        <div className = "form-group">
                                            <label style={{marginLeft: "-455px", marginBottom: "10px"}}> First Name: </label>
                                            <input placeholder="Enter Your First Name" type="text" name="fname" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            onChange={this.changeFnameHandler} />
                                        </div>
                                        <br></br>
                                        <div className = "form-group" style={{marginTop: "10px"}}>
                                            <label style={{marginLeft: "-457px", marginBottom: "10px"}}> Last Name: </label>
                                            <input placeholder="Enter Your Last Name" type="text" name="lname" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            onChange={this.changeLnameHandler} />
                                        </div>
                                        <br></br>
                                        <div className = "form-group" style={{marginTop: "10px"}}>
                                            <label style={{marginLeft: "-453px", marginBottom: "10px"}}> User Name: </label>
                                            <input placeholder="Enter Your User Name" type="text" name="username" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            onChange={this.changeUserNameHandler} />
                                        </div>
                                        <br></br>
                                        <div className = "form-group" style={{marginTop: "10px"}}>
                                            <label style={{marginLeft: "-495px", marginBottom: "10px"}}> Email: </label>
                                            <input placeholder="Enter Your Email" type="text" name="email" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            onChange={this.changeEmailHandler} />
                                        </div>
                                        <br></br>
                                        <div className = "form-group" style={{marginTop: "10px"}}>
                                            <label style={{marginLeft: "-463px", marginBottom: "10px"}}> Password: </label>
                                            <input placeholder="Enter Your Password" type="text" name="password" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            onChange={this.changePasswordHandler} />
                                        </div>
                                        <br></br><br></br>
					
                                        <button className="btn btn-success" onClick={this.saveUser} style={{marginLeft: "0px"}}>Register    </button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "110px"}}>Cancel</button>
                                   
                                        <br></br>
										<br></br>

										<h4 style={{marginTop: "25px"}}>ALREADY HAVE AN ACCOUNT? <a href="/login" style={{textDecoration:"none", color: "red", }}> LOGIN HERE </a></h4>
                                    </form>
                                </div>
                                <div style={{ marginLeft: "2%", marginTop:"150px", color:"white"}}>
							<h3 className='footer'>
								Know Your Neighbourhood Pvt. Ltd.
							</h3>
					</div>
                            </div>
                        </div>

                   </div>
                    

            </div>
        )
    }
}


export default Register;