import './App.css';
import Layout from './Containers/Layout/Layout';
import {BrowserRouter} from "react-router-dom";
import AuthLayOut from './Containers/AuthLayOut/AuthLayOut';
import { connect } from 'react-redux';
import * as actions from "./store/actions/index"
import { Component } from 'react';
class App extends Component {
  componentDidMount(){
    this.props.onAuthSignUp();
    this.props.notesFetecher();
  }
  render(){
  return (
      <BrowserRouter>
    <div className="App">
      {this.props.isAuth ?<Layout /> :  <AuthLayOut /> }
    </div>
    </BrowserRouter>
  );
}
}

const mapStateToProps = state =>{
  return {
    isAuth : state.auth.idToken !== null
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAuthSignUp : ()=> dispatch(actions.authautoSignUp()),
    notesFetecher : ()=> dispatch(actions.noteFetecher())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
