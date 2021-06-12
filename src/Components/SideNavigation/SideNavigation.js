import React from 'react';
import classes from "./SideNavigation.module.scss";
import { Note,ExitToApp } from '@material-ui/icons';
import BackDrop from '../UI/BackDrop.js/BackDrop';

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
            <span>
            <Note className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>Keep</span>
            </span>

            <br/>            
            <br/>            
            <span>
            <ExitToApp className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>LogOut</span>
            </span>
        </div>
        </React.Fragment>
    )
}

export default SideNavigation
