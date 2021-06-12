import React, { Component } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import NotesLayout from '../NotesLayout/NotesLayout';
import SideNavigation from '../../Components/SideNavigation/SideNavigation';

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
               <NotesLayout />
           </React.Fragment>
        )
    }
}

export default Layout;