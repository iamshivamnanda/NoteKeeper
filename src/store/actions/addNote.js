import * as actionTypes from "./actionTyoes";

export const addnote = (noteData)=>{
    return {
        type:actionTypes.ADDNOTE,
        noteData:noteData
    };
}

export const noteFetecher = ()=>{
    return {
        type:actionTypes.NOTESFETECHER,
    };
}

export const delnote = (noteId)=>{
    return {
        type:actionTypes.REMOVENOTE,
        id:noteId
    };
}

export const completeremovenote = (noteId)=>{
    return {
        type:actionTypes.COMPLETEREMOVENOTE,
        id:noteId
    };
}
export const delCheckedNote = (noteId)=>{
    return {
        type:actionTypes.DELETECHECKEDNOTE,
        id:noteId
    };
}


export const pinNote = (noteId)=>{
    return {
        type:actionTypes.PINNEDNOTE,
        id:noteId
    };
}

export const unpinNote = (noteId)=>{
    return {
        type:actionTypes.UNPINNEDNOTE,
        id:noteId
    };
}

export const changeTxt = (noteId,txt)=>{
    return {
        type:actionTypes.CHANGETXT,
        id:noteId,
        txt:txt
    };
}


export const checkNote = (noteId,noteType)=>{
    return {
        type:actionTypes.CHECKNOTE,
        id:noteId,
        noteType : (noteType === 'note' ? actionTypes.NoteTypeNotes : actionTypes.PINNEDNOTE)
    };
}

export const uncheckNote = (noteId,noteType)=>{
    return {
        type:actionTypes.UNCHECKNOTE,
        id:noteId,
        noteType : (noteType === 'note' ? actionTypes.NoteTypeNotes : actionTypes.PINNEDNOTE)
    };
}