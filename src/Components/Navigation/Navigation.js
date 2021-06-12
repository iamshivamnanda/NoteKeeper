import React from "react";
import classes from "./Navigation.module.scss";
import { Menu } from "@material-ui/icons";
import { Note } from "@material-ui/icons";
import { ExitToApp } from "@material-ui/icons";
const Navigation = (props) => {
    return (
        <div className={classes.NavBar}>
            <span>
             <span onClick={props.sidebarhandler}>
            <Menu  className={classes.Icon} style={{fontSize:"2.5rem"}}/>
            </span>
            <span>
            <Note className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>Keep</span>
            </span>
            </span>
            
            <span>
            <ExitToApp className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>LogOut</span>
            </span>
        </div>
    );
};

export default Navigation;
