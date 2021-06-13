import React from 'react';
import classes from "./SideNavigation.module.scss";
import { Note,ExitToApp,DoneAllOutlined,Delete } from '@material-ui/icons';
import BackDrop from '../UI/BackDrop.js/BackDrop';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";

const SideNavigation = (props) => {
    const myclass =  [classes.SideNavigation];
    let backdrop = null ;
    if(props.show){
        myclass.push(classes.Show);
        backdrop =  <BackDrop sidebarhandler={props.sidebarhandler} />;
    }else{
        myclass.push(classes.Hide);
        

    }
    return (
        <React.Fragment>
           {backdrop}
        <div className={myclass.join(' ')}> 
        <NavLink to="/"  exact>            
            <span onClick={props.sidebarhandler}>
            <Note className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>NoteKeeper</span>
            </span>
            </NavLink>

            <br/>            
            <br/>            
            <span onClick={props.onLogOut}>
            <ExitToApp className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>LogOut</span>
            </span>
            <br/>            
            <br/>
            <NavLink to="/checked" exact>            
            <span onClick={props.sidebarhandler}>
            <DoneAllOutlined className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>Completed</span>
            </span>
            </NavLink>
            <br/>            
            <br/>  
            <NavLink to="/deleted" exact>            
            <span onClick={props.sidebarhandler}>
            <Delete className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>Deleted</span>
            </span>
            </NavLink>
            <h6 className={classes.Copyright}>@Copyright Shivam Nanda</h6>
        </div>
        </React.Fragment>
    )
}


const mapDispatchToProps = dispatch =>{
    return {
        onLogOut:()=> dispatch(actions.logout())
    }
}

export default connect(null,mapDispatchToProps)(SideNavigation);
