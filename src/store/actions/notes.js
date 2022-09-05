export const CREATE_NOTE_REQUEST = 'CREATE_NOTE_REQUEST';
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAIL = 'CREATE_NOTE_FAIL';

export function createNote(id, body) {
  return {
    type: CREATE_NOTE_REQUEST,
    payload: { id, body },
  };
}

export const GET_NOTES_REQUEST = 'GET_NOTES_REQUEST';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_FAIL = 'GET_NOTES_FAIL';

export function getNotes(id) {
  return {
    type: GET_NOTES_REQUEST,
    payload: { id },
  };
}

export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAIL = 'DELETE_NOTE_FAIL';

export function deleteNotes(noteId, userId) {
  return {
    type: DELETE_NOTE_REQUEST,
    payload: { noteId, userId },
  };
}

export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAIL = 'UPDATE_NOTE_FAIL';

export function updateNotes(noteId, userId, body) {
  return {
    type: UPDATE_NOTE_REQUEST,
    payload: { noteId, userId, body },
  };
}
