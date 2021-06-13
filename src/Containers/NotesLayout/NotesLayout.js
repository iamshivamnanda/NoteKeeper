import React, { Component } from 'react';
import classes from "./NotesLayout.module.scss";
import InputNote from '../../Components/InputNote/InputNote';
import PinnedNotes from '../PinnedNotes/PinnedNotes';
import OtherNotes from '../OthersNotes/OthersNotes';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import NoteModal from '../../Components/NoteModal/NoteModal';

class NotesLayout extends Component {
     state ={
         NoteModal : null
     }
   
    render() {
        const openNoteModal = (noteinfo)=>{
            // console.log("OPENMODAl");
            // console.log(noteinfo);
            this.setState({NoteModal:(<NoteModal checkNote={this.props.checkNote} noteinfo={noteinfo} closeNoteModal={closeNoteModal} changeTxt={this.props.changeTxt}   pinNote={this.props.pinNote} delNote={this.props.delNote} />)})
        }
        const closeNoteModal = ()=>{
            this.setState({NoteModal:null});
        }
        return (
            <div className={classes.NotesLayout}>
                {this.state.NoteModal}
                <InputNote addNote={this.props.addNote} />
                <PinnedNotes checkNote={this.props.checkNote}  pinNote={this.props.pinNote} delNote={this.props.delNote} openNoteModal={openNoteModal} />
                <OtherNotes checkNote={this.props.checkNote}  pinNote={this.props.pinNote}  delNote={this.props.delNote} openNoteModal={openNoteModal} />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        pinnedNote : state.notes.pinnednotes,
        notes : state.notes.notes,
        donenotes : state.notes.donenotes,
        deletednotes : state.notes.deletednotes,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addNote : (noteData) => dispatch(actions.addnote(noteData)),
        delNote : (noteid) => dispatch(actions.delnote(noteid)),
        pinNote : (noteid) => dispatch(actions.pinNote(noteid)),
        changeTxt : (noteid,txt) =>dispatch(actions.changeTxt(noteid,txt)),
        checkNote : (noteid,noteType)=>dispatch(actions.checkNote(noteid,noteType))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(NotesLayout);