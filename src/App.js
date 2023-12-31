import { BrowserRouter as Router, Switch ,Route,Routes } from 'react-router-dom'
import './App.css';
import Login from "./components/Login"
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
import {getUserAuth} from "./actions"
import { connect } from 'react-redux';
function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[]);
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route exact path="/" element={<Login/>}></Route>
      <Route path="/home" element={<><Header/><Home/></>}> </Route>
      </Routes>
     </Router>
    </div>
  );
}
 const mapStateToProps=(state)=>{
  return{};
 }
 const mapDispatchToprops=(dispatch)=>({
  getUserAuth:()=>dispatch(getUserAuth()),
 });
export default  connect(mapStateToProps,mapDispatchToprops)(App);
