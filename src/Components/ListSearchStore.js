import React, { Component } from 'react';
import StoreService from '../Services/StoreService';
import Header from './Header';
import Header1 from './Header1';

class ListSearchStore extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            store: [],
            searchKeyword: this.props.match.params.searchKeyword,
        };

        this.deleteStore = this.deleteStore.bind(this);
        this.viewStore = this.viewStore.bind(this);
        this.editStore = this.editStore.bind(this);
        this.addStore = this.addStore.bind(this);

    }

    //search store
    componentDidMount(){
        StoreService.searchStore(this.state.searchKeyword).then((res) => {
            this.setState({ store: res.data });
        });
     }

    //delete store by id
    deleteStore(id){
        StoreService.deleteStore(id).then(res=>{
                this.setState({store:this.state.store.filter(store=>store.id!==id)});
                this.props.history.push(`/dashboard`); 
            });
 
     }

    // add store by id redirect
    addStore(){   
        this.props.history.push(`/add-store/_add`);
    }
 
    //view store by id redirect
    viewStore(id){
        this.props.history.push(`/view-store/${id}`);
     }

    //update store redirect method
    editStore(id){   
        this.props.history.push(`/add-store/${id}`);
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
				height: "1050px",
			}}>
                            
                <Header1></Header1>
                <Header></Header>

                <div className = "card col-md-6 offset-md-3 offset-md-3" style={{width:"90%", height:"700px", backgroundColor:"lightgrey", margin:"50px 0px 30px 80px", }}>
                     <h1 className="card title" style={{marginTop:"30px", marginBottom:"30px", border:"0", backgroundColor:"lightgrey" }} >Search Store Result</h1>

                    <div style={{width:"1380px"}}>

                     
                        <nav style={{width:"50%", float:"left", margin:"0"}}>
                                <form style={{marginTop:"25px", width: "500px", height:"70px"}}>
                                    <input className='' type='search'
                                    placeholder='Search Your Store' aria-label='Search' style={{marginLeft:"50px", marginTop:"24px", width:"250px"}} 
                                    value={this.state.searchKeyword}
                                    onChange={this.changeSearchHandler}/>

                                    <button onClick={() => this.searchStore(this.state.searchKeyword)}
                                    className='btn btn-info' style={{width:"100px", marginLeft:"20px", marginTop:"-7px", height:"40px"}}> Search{" "}</button>
                                </form>
                        </nav>

                        <div style={{height:"95px", marginTop:"45px", float:"right", marginRight:"100px"}}>
                            <button className="btn btn-primary" href="/addstoree" style={{width:"250px"}} onClick={this.addStore} > Add Store</button>
                        </div>
                    </div>
                    <br></br>

            <div style={{width:"1300px", marginLeft:"35px",}}>
            <table className = "table table-striped table-bordered"style={{border:"black 1px"}} >

                        <thead>
                            <tr>
                                <th>Store ID</th>
                                <th> Store Name</th>
                                <th> Phone Number</th>
                                <th> Store Locality</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.store.map(
                                    store => 
                                    <tr key = {store.id}>
                                            <td> {store.id}</td>
                                            <td> {store.name} </td>   
                                            <td> {store.phoneNumber}</td>
                                            <td> {store.locality}</td>
                                            <td>  

                                        <button 
                                                style={{marginLeft: "10px"}} 
                                                onClick={ () => this.deleteStore(store.id)} 
                                                className="btn btn-danger">Delete </button>


                                        <button 
                                                style={{marginLeft: "10px"}} 
                                                onClick={ () => this.viewStore(store.id)} 
                                                className="btn btn-primary">View </button>

                                        

                                            <button 
                                                style={{marginLeft: "10px"}} 
                                                className="btn btn-success"
                                                onClick={ () => this.editStore(store.id)}>Update</button>

                                            </td>
                                            
                                    </tr>
                                )
                                
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
                <div style={{ marginLeft: "2%", marginTop:"80px", color:"white"}}>
							<h3 className='footer'>
								Know Your Neighbourhood Pvt. Ltd.
							</h3>
					</div>
             </div>
        );
    }
}

export default ListSearchStore;