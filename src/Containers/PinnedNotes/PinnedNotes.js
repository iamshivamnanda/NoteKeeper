import React, { Component } from 'react';
import classes from "./PinnedNotes.module.scss";
import Note from '../../Components/Note/Note';
import { connect } from 'react-redux';
class PinnedNotes extends Component {
    render() {
        const notes = this.props.pinnedNote.map(note => <Note key={note.id} noteInfo={note} checkNote={this.props.checkNote} pinNote={this.props.pinNote} delNote={this.props.delNote} openNoteModal={this.props.openNoteModal} />);
        return (
            <div className={classes.PinnedNotes}>
                <h3 style={{textAlign:"left"}}>Pinned</h3>
                <div  className={classes.Notes} >
               {notes}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        pinnedNote : state.notes.pinnednotes,
    }
}

export default connect(mapStateToProps)(PinnedNotes);