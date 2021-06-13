import React, { Component } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import NotesLayout from '../NotesLayout/NotesLayout';
import CheckedLayOut from '../CheckedLayOut/CheckedLayOut';
import DeletedLayOut from '../DeletedLayOut/DeletedLayOut';
import SideNavigation from '../../Components/SideNavigation/SideNavigation';
import {Switch,Route, Redirect} from "react-router-dom";

 class Layout extends Component {
    state ={
        show:false
    }
    sideNavigationHandler = ()=>{
        this.setState({show:!this.state.show})
    }
    render() {
        
        return (
           <React.Fragment>
               <SideNavigation show={this.state.show} sidebarhandler={this.sideNavigationHandler} />
               <Navigation sidebarhandler={this.sideNavigationHandler} /> 
                <Switch>
               <Route path= "/checked" exact component={CheckedLayOut} />
                <Route path= "/deleted" exact component={DeletedLayOut} />
                <Route path= "/" exact  component={NotesLayout} />
                <Redirect to='/' />
               </Switch>
           </React.Fragment>
        )
    }
}

export default Layout;