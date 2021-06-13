import React from 'react';
import classes from "./InputNote.module.scss";
import { Save } from '@material-ui/icons';

const InputNote = (props) => {
    const colors = ['#093119','#483E0B','#091E31','#480B0B','#1E0F49','#490F40','#0F4949'];
    let txt ;
    const txtChangeHandler = (event)=>{
        txt = event.target.value;
    }
    const onSubmitHandler =(event)=>{
        const notecolor = colors[Math.floor((Math.random() * 6))];
        // console.log(notecolor);
        txt = document.querySelector('textarea').value ;
        event.preventDefault();
        const noteData = {
            id : Date.now(),
            txt: txt,
            pinned:false,
            delete:false,
            checked:false,
            color:notecolor
        }
        props.addNote(noteData);
        // console.log(noteData);
    }
    return (
        <div className={classes.Container}>
            <form onSubmit={onSubmitHandler}>
                <span className={classes.Span}>
                <textarea className={classes.InputField} onChange={txtChangeHandler} type="text" placeholder="Take a Note...">
                </textarea>
                <span className={classes.SaveBttn} onClick={onSubmitHandler}>
                <Save className={classes.Icon} />
                <span className={classes.IconText}>Save</span>
                </span>
                </span>
            </form>
        </div>
    )
}

export default InputNote
