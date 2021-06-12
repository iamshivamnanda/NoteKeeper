import React, { Component } from 'react';
import classes from "./NotesLayout.module.scss";
import InputNote from '../../Components/InputNote/InputNote';
import PinnedNotes from '../PinnedNotes/PinnedNotes';
import OtherNotes from '../OthersNotes/OthersNotes';

class NotesLayout extends Component {
    render() {
        return (
            <div className={classes.NotesLayout}>
                <InputNote />
                <PinnedNotes />
                <OtherNotes />
            </div>
        )
    }
}

export default NotesLayout;