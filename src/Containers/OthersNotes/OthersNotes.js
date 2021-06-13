import React, { Component } from 'react';
import classes from "./OtherNotes.module.scss";
import Note from '../../Components/Note/Note';
import { connect } from 'react-redux';
class OtherNotes extends Component {
    render() {
        // console.log(this.props.notes);
        const notes = this.props.notes.map(note => <Note key={note.id} noteInfo={note} checkNote={this.props.checkNote} pinNote={this.props.pinNote}  delNote={this.props.delNote}  openNoteModal={this.props.openNoteModal}  />);
        return (
            <div className={classes.OtherNotes}>
                <h3 style={{textAlign:"left"}}>Others</h3>
                <div  className={classes.Notes} >
                {notes}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state =>{
    return{
        notes : state.notes.notes,
    }
}

export default connect(mapStateToProps)(OtherNotes);