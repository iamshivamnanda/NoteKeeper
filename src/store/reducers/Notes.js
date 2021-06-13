import * as actionTypes from "../actions/actionTyoes";

const initialstate = {
    notes: [],
    pinnednotes: [],
    donenotes: [],
    deletednotes: [],
};

const notesreducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.ADDNOTE:
            const notess = [...state.notes];
            notess.push(action.noteData);
            console.log(notess);
            localStorage.setItem('allnotes',JSON.stringify({...state, notes: notess,}));
            return {
                ...state,
                notes: notess,
            };
        case actionTypes.PINNEDNOTE:
            let pinnoteIndex = state.notes.findIndex(
                (note) => note.id === action.id
            );
            let pinnote;
            if (pinnoteIndex !== -1) {
                pinnote = state.notes[pinnoteIndex];
                // console.log("UNPINED ",pinnote);
            }
            if (pinnoteIndex === -1) {
                pinnoteIndex = state.pinnednotes.findIndex(
                    (note) => note.id === action.id
                );
                pinnote = state.pinnednotes[pinnoteIndex];
            }
            // console.log(pinnoteIndex);

            // console.log(pinnote);
            let notesss;
            let pinnedNotess;
            if (!pinnote.pinned) {
                pinnote.pinned = true;
                notesss = [...state.notes];
                notesss.splice(pinnoteIndex, 1);
                pinnedNotess = [...state.pinnednotes];
                pinnedNotess.push(pinnote);
            } else {
                pinnote.pinned = false;
                pinnedNotess = [...state.pinnednotes];
                pinnedNotess.splice(pinnoteIndex, 1);
                notesss = [...state.notes];
                notesss.push(pinnote);
            }
            localStorage.setItem('allnotes',JSON.stringify({
                ...state,
                notes: notesss,
                pinnednotes: pinnedNotess,
            }));

            return {
                ...state,
                notes: notesss,
                pinnednotes: pinnedNotess,
            };
        case actionTypes.REMOVENOTE:
            let allnotes = [...state.notes];
            let deletednotess = [...state.deletednotes];
            let allpinnedNotess = [...state.pinnednotes];
            let noteIndex = state.notes.findIndex(
                (note) => note.id === action.id
            );
            let deltednote;
            if (noteIndex !== -1) {
                deltednote = allnotes[noteIndex];

                allnotes.splice(noteIndex, 1);

                // console.log("UNPINED ",pinnote);
            }
            if (noteIndex === -1) {
                noteIndex = state.pinnednotes.findIndex(
                    (note) => note.id === action.id
                );
                deltednote = allpinnedNotess[noteIndex];
                allpinnedNotess.splice(noteIndex, 1);
            }
            deltednote.delete = true;
            deletednotess.push(deltednote);
            localStorage.setItem('allnotes',JSON.stringify(
                {
                    ...state,
                    notes: allnotes,
                    pinnednotes: allpinnedNotess,
                    deletednotes: deletednotess,
                }
            ));

            return {
                ...state,
                notes: allnotes,
                pinnednotes: allpinnedNotess,
                deletednotes: deletednotess,
            };
        case actionTypes.CHANGETXT:
            let allnotess = [...state.notes];
            let apppinnedNotes = [...state.pinnednotes];
            let currentNoteIndex = state.notes.findIndex(
                (note) => note.id === action.id
            );
            if (currentNoteIndex !== -1) {
                console.log(allnotess);
                allnotess[currentNoteIndex].txt = action.txt;
                // console.log("UNPINED ",pinnote);
            }
            if (currentNoteIndex === -1) {
                currentNoteIndex = state.pinnednotes.findIndex(
                    (note) => note.id === action.id
                );

                apppinnedNotes[currentNoteIndex].txt = action.txt;
            }
            localStorage.setItem('allnotes',JSON.stringify(
                {
                    ...state,
                    notes: allnotess,
                    pinnednotes: apppinnedNotes,
                }
            ));
            return {
                ...state,
                notes: allnotess,
                pinnednotes: apppinnedNotes,
            };
        case actionTypes.CHECKNOTE:
            let allNotes;
            let checkedNotes;
            checkedNotes = [...state.donenotes];
            if (action.noteType === actionTypes.NoteTypeNotes) {
                allNotes = [...state.notes];
            } else {
                allNotes = [...state.pinnednotes];
            }
            const noteindex = allNotes.findIndex(
                (note) => note.id === action.id
            );
            const currentNote = allNotes[noteindex];
            currentNote.checked = !currentNote.checked;
            allNotes.splice(noteindex, 1);
            checkedNotes.push(currentNote);
            if (action.noteType === actionTypes.NoteTypeNotes) {
                localStorage.setItem('allnotes',JSON.stringify(
                    {
                        ...state,
                        notes: allNotes,
                        donenotes: checkedNotes,
                    }
                ));
                return {
                    ...state,
                    notes: allNotes,
                    donenotes: checkedNotes,
                };
            } else {
                localStorage.setItem('allnotes',JSON.stringify(
                    {
                        ...state,
                        pinnednotes: allNotes,
                        donenotes: checkedNotes,
                    }
                ));
                return {
                    ...state,
                    pinnednotes: allNotes,
                    donenotes: checkedNotes,
                };
            }
        case actionTypes.UNCHECKNOTE:
            let allNotesss;
            let checkedNotesss;
            checkedNotesss = [...state.donenotes];
            if (action.noteType === actionTypes.NoteTypeNotes) {
                allNotesss = [...state.notes];
            } else {
                allNotesss = [...state.pinnednotes];
            }
            const noteIndexx = checkedNotesss.findIndex(
                (note) => note.id === action.id
            );
            const currentNotee = checkedNotesss[noteIndexx];
            currentNotee.checked = !currentNotee.checked;
            checkedNotesss.splice(noteIndexx, 1);
            allNotesss.push(currentNotee);
            if (action.noteType === actionTypes.NoteTypeNotes) {
                localStorage.setItem('allnotes',JSON.stringify(
                    {
                        ...state,
                        notes: allNotesss,
                        donenotes: checkedNotesss,
                    }
                ));
                return {
                    ...state,
                    notes: allNotesss,
                    donenotes: checkedNotesss,
                };
            } else {
                localStorage.setItem('allnotes',JSON.stringify(
                    {
                        ...state,
                        pinnednotes: allNotesss,
                        donenotes: checkedNotesss,
                    }
                ));
                return {
                    ...state,
                    pinnednotes: allNotesss,
                    donenotes: checkedNotesss,
                };
            }
        case actionTypes.COMPLETEREMOVENOTE:
            const deletednotesss = [...state.deletednotes];
            let removenoteindex = deletednotesss.findIndex(
                (note) => note.id === action.id
            );
            deletednotesss.splice(removenoteindex, 1);
            localStorage.setItem('allnotes',JSON.stringify(
                {
                    ...state,
                    deletednotes: deletednotesss,
                }
            ));
            return {
                ...state,
                deletednotes: deletednotesss,
            };
        case actionTypes.DELETECHECKEDNOTE:
            const deletedNotesss = [...state.deletednotes];
            const checkedNotessss= [...state.donenotes];
            let removenoteIndex = checkedNotessss.findIndex(
                (note) => note.id === action.id
            );
            const workingNote = checkedNotessss[removenoteIndex];
            workingNote.delete = true;

            deletedNotesss.push(workingNote);
            checkedNotessss.splice(removenoteIndex, 1);
            localStorage.setItem('allnotes',JSON.stringify(
                {
                    ...state,
                    deletednotes: deletedNotesss,
                    donenotes:checkedNotessss
                }  
            ));
            return {
                ...state,
                deletednotes: deletedNotesss,
                donenotes:checkedNotessss
            };
        case actionTypes.NOTESFETECHER:
            const notesData = JSON.parse(localStorage.getItem('allnotes'));
            console.log(notesData);
            if(notesData){
                return{
                    ...notesData
                }
            }else{
                return{
                    ...state
                }
            }
        default:
            // console.log(action.type)
            return state;
    }
};

export default notesreducer;
