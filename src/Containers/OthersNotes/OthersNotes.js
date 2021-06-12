import React, { Component } from 'react';
import classes from "./OtherNotes.module.scss";
import Note from '../../Components/Note/Note';
class OtherNotes extends Component {
    render() {
        return (
            <div className={classes.OtherNotes}>
                <h3 style={{textAlign:"left"}}>Others</h3>
                <Note />
                <Note />
            </div>
        )
    }
}

export default OtherNotes;