import React, { Component } from "react";
import classes from "./CheckedLayOut.module.scss"
import NoteModal from "../../Components/NoteModal/NoteModal";
import { connect } from "react-redux";
import Note from "../../Components/Note/Note";
import * as actions from "../../store/actions/index"
class CheckedLayOut extends Component {
    state = {
        NoteModal: null,
    };

     openNoteModal = (noteinfo) => {
        // console.log("OPENMODAl");
        // console.log(noteinfo);
        this.setState({
            NoteModal: (
                <NoteModal
                    checkNote={this.props.checkNote}
                    uncheckNote={this.props.uncheckNote}
                    noteinfo={noteinfo}
                    delNote={this.props.delNote}
                    closeNoteModal={this.closeNoteModal}
                />
            ),
        });
    };
     closeNoteModal = () => {
        this.setState({ NoteModal: null });
    };

    render() {
        const notes = this.props.donenotes.map(note => <Note key={note.id}                     delNote={this.props.delNote}
            noteInfo={note} checkNote={this.props.checkNote}  openNoteModal={this.openNoteModal}                     uncheckNote={this.props.uncheckNote}
            />);

        
        return (
            <div className={classes.CheckedLayOut}>
                {this.state.NoteModal}
                <h3 style={{textAlign:"left"}}>Checked</h3>
                <div  className={classes.Notes} >
               {notes}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        donenotes: state.notes.donenotes,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        delNote : (noteid) => dispatch(actions.delCheckedNote(noteid)),
        checkNote : (noteid,noteType)=>dispatch(actions.checkNote(noteid,noteType)),
        uncheckNote : (noteid,noteType)=>dispatch(actions.uncheckNote(noteid,noteType))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CheckedLayOut);
