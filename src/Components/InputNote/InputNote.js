import React from 'react';
import classes from "./InputNote.module.scss";
import { Save } from '@material-ui/icons';

const InputNote = () => {
    const onSubmitHandler =(event)=>{
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <span className={classes.Span}>
                <input className={classes.InputField} type="text" placeholder="Take a Note . . .">
                </input>
                <span>
                <Save className={classes.Icon} />
                <span className={classes.IconText}>Save</span>
                </span>
                </span>
            </form>
        </div>
    )
}

export default InputNote
