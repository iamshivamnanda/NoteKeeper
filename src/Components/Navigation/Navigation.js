import React from "react";
import classes from "./Navigation.module.scss";
import { Menu } from "@material-ui/icons";
import { Note } from "@material-ui/icons";
import { ExitToApp } from "@material-ui/icons";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
const Navigation = (props) => {
    return (
        <div className={classes.NavBar}>
            <span>
             <span onClick={props.sidebarhandler}>
            <Menu  className={classes.Icon} style={{fontSize:"2.5rem"}}/>
            </span>
            <span>
            <Note className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>NoteKeeper</span>
            </span>
            </span>
            
            <span onClick={props.onLogOut} >
            <ExitToApp className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>LogOut</span>
            </span>
        </div>
    );
};

const mapDispatchToProps = dispatch =>{
    return {
        onLogOut:()=> dispatch(actions.logout())
    }
}

export default connect(null,mapDispatchToProps)(Navigation);
