import React, { Component } from 'react';
import StoreService from '../Services/StoreService';
import Header from './Header';
import Header1 from './Header1';

class CreateUpdateStore extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            storeName: '',
            storePhoneNumber: '',
            storeLocality: '',

           
        };
    }


    changeNameHandler = (event) => {
        event.preventDefault();
        this.setState({ storeName: event.target.value });
    }

    changePhoneNumberHandler = (event) => {
        event.preventDefault();
        this.setState({ storePhoneNumber: event.target.value });
    }

    changeLocalityHandler = (event) => {
        event.preventDefault();
        this.setState({ storeLocality: event.target.value });
    }

    createOrUpdateStore = (e) => {

        e.preventDefault();
        console.log("this is save");

        let store={
            name:this.state.storeName,
            phoneNumber:this.state.storePhoneNumber,
            locality:this.state.storeLocality,
        };

        // add store method
        if(this.state.id ==='_add'){
            StoreService.addStore(store).then(res=>{
            this.props.history.push('/dashboard');

        });

        // update store method
        }else {
            console.log("Update Store by storeId " + this.state.id);
            StoreService.updateStore(this.state.id, store).then(res=>{
            console.log("Update store details " + JSON.stringify(res.data));
            this.props.history.push('/dashboard');

        });
        }
    }

    cancel() {
        this.props.history.push('/dashboard');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Store</h3>
        }else{
            return <h3 className="text-center">Update Store</h3>
        }
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{

            StoreService.viewStore(this.state.id).then((res)=>{
                let store=res.data;

                this.setState({
                    storeName:store.name,
                    storePhoneNumber:store.phoneNumber,
                    storeLocality:store.locality
                });
            })

        }

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
				height: "1000px",
			}}>

                <Header1></Header1>
				<Header></Header>
                <div className = "container-fluid" style={{paddingTop:"230px"}}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"lightgrey", border:"black 10px", marginTop:"50px", marginBottom:"50px", alignItems:"center", height: "580px", borderRadius:"20px" }}>
                                <div className = "card-body">
                                <h1 style={{paddingLeft:"0px", paddingTop:"30px", }}>{this.getTitle()}</h1>

                                    <form style={{marginTop:"45px", width:"700px", }}>
									
                                       
                                        <div className = "form-group">
                                            <label style={{marginLeft: "-445px", marginBottom: "10px"}}> Store Name: </label>
                                            <input placeholder="Enter Your Store Name" type="text" name="storeName" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            value={this.state.storeName}
                                            onChange={this.changeNameHandler} />
                                        </div>
                                        <br></br>
                                        <div className = "form-group" style={{marginTop: "10px"}}>
                                            <label style={{marginLeft: "-420px", marginBottom: "10px"}}> Phone Number: </label>
                                            <input placeholder="Enter Your Store Phone Number" type="text" name="storePhoneNumber" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            value={this.state.storePhoneNumber}
                                            onChange={this.changePhoneNumberHandler} />
                                        </div>
                                        <br></br>
                                        <div className = "form-group">
                                            <label style={{marginLeft: "-445px", marginBottom: "10px"}}> Store Name: </label>
                                            <input placeholder="Enter Your Store Location" type="text" name="storeLocality" className="form-control" style={{width:"540px", marginLeft:"80px", }}
                                            value={this.state.storeLocality}
                                            onChange={this.changeLocalityHandler}   />
                                        </div>
                                        <br></br><br></br>

                                        <button className="btn btn-success" onClick={this.createOrUpdateStore} style={{ width:"100px"}}  >Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "110px", width:"100px"}}>Cancel</button>
	
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

export default CreateUpdateStore;