import React from 'react';
import classes from './Input.module.scss';

const Input = (props) => {
    let inputelement = null;
    const inputclasses = [classes.InputElement];
    if(props.Invalid && props.shouldvalid && props.touched){
        inputclasses.push(classes.Invalid);
    }
    switch(props.elementtype){
        case 'input':
        inputelement = <input className={inputclasses.join(' ')} {...props.elementconfig} value={props.value} onChange={props.changed}></input>
        break
        default:
            inputelement = <input className={inputclasses.join(' ')} {...props.elementconfig} value={props.value} onChange={props.changed}></input>
    }
    return (
        <div className={classes.Input}>
            {inputelement}
        </div>
    )
}

export default Input
