import React, { Component } from 'react';
import classes from './DeletedLayOut.module.scss';
import NoteModal from '../../Components/NoteModal/NoteModal';
import Note from '../../Components/Note/Note';
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index";

 class DeletedLayOut extends Component {
    state = {
        NoteModal: null,
    };

     openNoteModal = (noteinfo) => {
        // console.log("OPENMODAl");
        // console.log(noteinfo);
        this.setState({
            NoteModal: (
                <NoteModal
                completedRemoveNote={this.props.completedRemoveNote}
                    noteinfo={noteinfo}
                    closeNoteModal={this.closeNoteModal}
                />
            ),
        });
    };
     closeNoteModal = () => {
        this.setState({ NoteModal: null });
    };

    render() {
        const notes = this.props.deletednotes.map(note => <Note key={note.id} noteInfo={note} completedRemoveNote={this.props.completedRemoveNote}  openNoteModal={this.openNoteModal}
            />);

        
        return (
            <div className={classes.DeletedLayOut}>
                {this.state.NoteModal}
                <h3 style={{textAlign:"left"}}>Deleted</h3>
                <div  className={classes.Notes} >
               {notes}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        deletednotes : state.notes.deletednotes,
    };
};

const mapDispatchToProps = (dispatch) => {
return {
    completedRemoveNote : (noteid)=> dispatch(actions.completeremovenote(noteid))
}
}

export default  connect(mapStateToProps,mapDispatchToProps)(DeletedLayOut);