import React, { Component } from 'react';
import classes from "./Note.module.scss";
import { Delete ,CheckCircle ,Favorite,FavoriteBorder,CheckCircleOutlineOutlined  } from '@material-ui/icons';


class Note extends Component{
    render(){
        const noteInfo = this.props.noteInfo;
        const noteType = !noteInfo.pinned ? "note" : "pinedNote";

   const mystyle =  { backgroundColor: (noteInfo.checked || noteInfo.delete) ? "#272727" :noteInfo.color};
    // console.log(this.props.noteInfo);
    return (
        <div className={classes.Note} style={mystyle} >
            <div className={classes.Text} onClick={()=>this.props.openNoteModal(noteInfo)}>
            <p>{noteInfo.txt} </p>
            </div>
            {noteInfo.delete ?<span className={classes.DeleteIcon} onClick={()=>this.props.completedRemoveNote(noteInfo.id)}>
            <Delete  />
            </span> :
            <React.Fragment>
            <span className={classes.DeleteIcon} onClick={()=>  this.props.delNote(noteInfo.id)}>
            <Delete  />
            </span>
            {noteInfo.checked?null:
            <span className={classes.FavoriteIcon} onClick={()=> this.props.pinNote(noteInfo.id)}>
             {noteInfo.pinned ? <Favorite /> : <FavoriteBorder  />}    
            </span>
            }
              {noteInfo.checked?<span className={classes.DoneIcon} onClick={()=>this.props.uncheckNote(noteInfo.id,noteType)}>
            <CheckCircle  />
            </span>:
            <span className={classes.DoneIcon} onClick={()=>this.props.checkNote(noteInfo.id,noteType)}>
            <CheckCircleOutlineOutlined  />
            </span>
    }
    </React.Fragment>
}
        </div>
    )
    }
}  

export default Note
