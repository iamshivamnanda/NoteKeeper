import React, { Component } from 'react';
import classes from './AuthLayOut.module.scss';
import { Note } from '@material-ui/icons';
import Input from '../../Components/UI/Input/Input';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";

class AuthLayOut extends Component {
    state={
        isSignup : true,
        controls:{  
           email: {
               elementtype: "input",
               elementconfig: {
                 type: "email",
                 placeholder: "Mail Address",
               },
               value: "",
               validation:{
                 required:true,
                 isEmail:true
               },
               valid:false,
               touched:false
        },
        password: {
           elementtype: "input",
           elementconfig: {
             type: "password",
             placeholder: "Password",
           },
           value: "",
           validation:{
             required:true,
             minlenght:6,
             isNumeric:true 
           },
           valid:false,
           touched:false
    }
       }
    }
    inputFieldChangeHandler = (event)=>{
        // console.log(event.target);
        if(event.target.type === "email"){
            this.setState({email:event.target.value});
        }else{
            this.setState({password:event.target.value});
        }
    }
    validcheck = (value,rules)=>{
        let isvalid = true;
        if(rules.required){
          isvalid = value.trim() !== '' && isvalid;
        }
        if(rules.minlenght){
          isvalid = value.length >=rules.minlenght && isvalid;
        }
        if(rules.maxlenght){
          isvalid = value.length <=rules.maxlenght && isvalid;
        }
        if (rules.isEmail) {
          const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
          isvalid = pattern.test(value) && isvalid
      }
    
      if (rules.isNumeric) {
          const pattern = /^\d+$/;
          isvalid = pattern.test(value) && isvalid
      }
    
        return isvalid
      }
      inputchangehandler = (event,inputidentifier) =>{
        const updatedControls = {
          ...this.state.controls,
          [inputidentifier]:{
            ...this.state.controls[inputidentifier],
            value:event.target.value,
            valid:this.validcheck(event.target.value,this.state.controls[inputidentifier].validation),
            touched:true
          }
        };
        this.setState({controls:updatedControls});
      } 
      submithandler = (event)=>{
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value,this.state.controls.password.value,this.state.isSignup);
      }
  
      switchmethodhandler = ()=>{
        this.setState({isSignup : !this.state.isSignup});
      }
    render() {
        let formelements = [];
      let errorMessage = null;
      for (const key in this.state.controls) {
        formelements.push({
          id: key,
          config: this.state.controls[key],
        });
      }
      let form = formelements.map((formel) => (
            <Input
              key={formel.id}
              elementtype={formel.config.elementtype}
              elementconfig={formel.config.elementconfig}
              value={formel.config.value}
              Invalid={!formel.config.valid}
              shouldvalid = {formel.config.validation}
              touched={formel.config.touched}
              changed = {(event)=>this.inputchangehandler(event,formel.id)}
            />
          ));
        if(this.props.loading){
          form = (<Spinner></Spinner>);
        }
        if(this.props.errormessage){
          errorMessage = (<p>{this.props.errormessage}</p>);
        }
        return (
            <div className={classes.AuthLayOut}>
                <div className={classes.AuthForm}>
                <span >
            <Note className={classes.Icon}  style={{fontSize:"5rem"}}/> 
            <span className={classes.IconText}>NoteKeeper</span>
            </span>
            <form className={classes.Form} onSubmit={this.submithandler}>
                <h6 className={classes.Method} style={{fontSize:"1.2rem"}} >{this.state.isSignup ? "SignUp" : "SignIn"} </h6>
                {errorMessage}
                {form}
                <button type="submit" onClick={this.submithandler}> Submit </button>
                <br />
                </form>
                <span className={classes.Method} onClick={this.switchmethodhandler} >Switch To {this.state.isSignup ? "SignIn" : "SignUp"}</span>
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
      loading:state.auth.loading,
      errormessage : state.auth.error,
      isAuth : state.auth.idToken !== null,
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return {
      onAuth : (email,password,isSignup) => dispatch(actions.auth(email,password,isSignup))
    }
  }
  

export default connect(mapStateToProps,mapDispatchToProps)(AuthLayOut);