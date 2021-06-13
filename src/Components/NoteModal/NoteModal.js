import React from 'react';
import classes from "./NoteModal.module.scss";
import BackDrop from "../UI/BackDrop.js/BackDrop";
import { Delete ,CheckCircle ,Favorite,FavoriteBorder,Save ,CheckCircleOutline } from '@material-ui/icons';
import { useState } from 'react';


const NoteModal = (props) => {
    
    const textChangeHandler = (event)=>{
        setstate({pinned:state.pinned,checked:state.checked,txt:event.target.value});
    }
    const noteInfo = props.noteinfo;
    const mystyle =  { backgroundColor: (noteInfo.checked || noteInfo.delete) ? "#272727" :noteInfo.color};
    const [state, setstate] = useState({pinned:noteInfo.pinned,txt:noteInfo.txt,checked:noteInfo.checked});
    const noteType = !state.pinned ? "note" : "pinedNote";
     // console.log(this.props.noteInfo);

     const icons = state.checked ? (<span className={classes.DoneIcon} onClick={()=>{props.uncheckNote(noteInfo.id,noteType);props.closeNoteModal();}}><CheckCircle /></span>) : (
         <React.Fragment>
        <span className={classes.FavoriteIcon} onClick={()=> {
        setstate({pinned:!state.pinned,checked:state.checked,txt:state.txt});
        props.pinNote(noteInfo.id)}}>
     {state.pinned ? <Favorite /> : <FavoriteBorder  />}    
    </span>
    <span className={classes.DoneIcon} onClick={()=>{props.checkNote(noteInfo.id,noteType);props.closeNoteModal();}}>
    <CheckCircleOutline  />
    </span>
    <span className={classes.SaveIcon} onClick={()=> {props.changeTxt(noteInfo.id,state.txt);props.closeNoteModal();}}>
    <Save  />
    </span>
    </React.Fragment>);
     return (
        <React.Fragment>
        <BackDrop sidebarhandler={props.closeNoteModal} />
    <div className={classes.NoteModal} style={mystyle}>
        <p>My Note</p>
         <div className={classes.Note} style={mystyle}>
             <div className={classes.Text}>
            <textarea style={mystyle} value={state.txt} onChange={textChangeHandler}>  </textarea>
             </div>
             <div className={classes.Icons}>
            {noteInfo.delete ? <span className={classes.DeleteIcon} onClick={()=>  {props.closeNoteModal();props.completedRemoveNote(noteInfo.id);}}>
             <Delete  />
             </span> :
             <React.Fragment>
             <span className={classes.DeleteIcon} onClick={()=>  {props.delNote(noteInfo.id);props.closeNoteModal();}}>
             <Delete  />
             </span>
             {icons}
             </React.Fragment>
}
             </div>
         </div>
         </div>
        </React.Fragment>
     );
}

export default NoteModal
