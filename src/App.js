import {React,Component} from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {Navigationbar} from './components/Navigationbar';
import Booking from './components/Booking';
import "./App.css";
class App extends Component{
  render()
  {
    return(
      <div className="App">
        <Navigationbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/booking" component={Booking}/>
          </Switch>  
       </BrowserRouter>
      </div>
      
    );
  }


}

export default App;