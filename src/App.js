import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import TermsCondition from './Components/TermsCondition';
import Register from './Components/Register';
import Login from './Components/Login';
import ViewStore from './Components/ViewStore';
import CreateUpdateStore from './Components/CreateUpdateStore';
import Store from './Components/Store';
import ListSearchStore from './Components/ListSearchStore';
import Facebook from './Components/Facebook';

function App() {
  return (

      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component = {Home}></Route>
            <Route path='/home' exact component = {Home}></Route>
            <Route path='/about' exact component = {About}></Route>
            <Route path='/contact' exact component = {Contact}></Route>
            <Route path='/terms' exact component = {TermsCondition}></Route>
            <Route path='/register' exact component = {Register}></Route>
            <Route path='/login' exact component = {Login}></Route>
            <Route path='/dashboard' exact component = {Store}></Route>
            <Route path='/facebookdash' exact component = {Facebook}></Route>
            <Route path='/add-store/:id' exact component = {CreateUpdateStore}></Route>
            <Route path='/addstoree' exact component = {CreateUpdateStore}></Route>
            <Route path='/view-store/:id' exact component = {ViewStore}></Route>
            <Route path='/search-store/:searchKeyword' exact component = {ListSearchStore}></Route>
            
          </Switch>
        </div>
      </Router>
   
  );
}

export default App;
