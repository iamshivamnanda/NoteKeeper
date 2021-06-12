import React, { Component } from 'react';
import classes from "./PinnedNotes.module.scss";
import Note from '../../Components/Note/Note';
class PinnedNotes extends Component {
    render() {
        return (
            <div className={classes.PinnedNotes}>
                <h3 style={{textAlign:"left"}}>Pinned</h3>
                <Note />
                <Note />
            </div>
        )
    }
}

export default PinnedNotes;