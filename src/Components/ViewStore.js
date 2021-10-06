import React, { Component } from 'react';
import StoreService from '../Services/StoreService';
import Header from './Header';
import Header1 from './Header1';

class ViewStore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            store: {}
        };
        
        this.dashboard = this.dashboard.bind(this);
    }

    componentDidMount(){
       StoreService.viewStore(this.state.id).then( res => {
            this.setState({store: res.data});
        })
    }

    dashboard(){
        this.props.history.push(`/dashboard`);
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
				height: "800px",
			}}>
                <Header></Header>
                <Header1></Header1>
                
                <div className = "card col-md-6 offset-md-3 offset-md-3" style={{width:"54%", height:"500px", backgroundColor:"lightgrey", margin:"50px 0px 30px 360px", }}>
                <h1 className="card title" style={{marginTop:"30px", marginBottom:"30px", border:"0", backgroundColor:"lightgrey" }} >View Store Details</h1>
                    <div className = "card-body">
                        <div >
                            <h3 style={{width:"200px", marginLeft:"260px", fontSize:"23px", marginTop:"50px", float:"left", height:"30px"}}> Store Name: </h3>
                            <h3 style={{width:"300px", fontSize:"23px", marginTop:"50px", float:"left", textAlign:"left", height:"30px"}}>{this.state.store.name}</h3>
                        </div>
                        <div >
                            <h3 style={{width:"220px", marginLeft:"233px", fontSize:"23px", marginTop:"50px", float:"left", height:"30px", marginRight:"8px"}}> Phone Number: </h3>
                            <h3 style={{width:"300px", fontSize:"23px", marginTop:"50px", float:"left", textAlign:"left", height:"30px"}}>{this.state.store.phoneNumber}</h3>
                        </div>
                        <div >
                            <h3 style={{width:"200px", marginLeft:"255px", fontSize:"23px", marginTop:"50px", float:"left", height:"30px", marginRight:"8px"}}> Store Locality: </h3>
                            <h3 style={{width:"300px", fontSize:"23px", marginTop:"50px", float:"left", textAlign:"left", height:"30px"}}>{this.state.store.locality}</h3>
                        </div>

                        <div style={{height:"95px", marginTop:"50px", float:"right", marginRight:"100px", width:"570px"}}>
                            <button className="btn btn-primary" href="/addstoree" style={{width:"250px"}} onClick={this.dashboard} > dashboard</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStore;