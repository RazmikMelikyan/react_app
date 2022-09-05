import { takeLatest, call, put } from 'redux-saga/effects';
import {
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAIL,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS, DELETE_NOTE_FAIL, UPDATE_NOTE_REQUEST, UPDATE_NOTE_SUCCESS, UPDATE_NOTE_FAIL,
  GET_NOTES_REQUEST, GET_NOTES_SUCCESS, GET_NOTES_FAIL,
} from '../actions/notes';
import Api from '../../Api';

export default function* watcher() {
  yield takeLatest(CREATE_NOTE_REQUEST, handleCreateNoteRequest);
  yield takeLatest(GET_NOTES_REQUEST, handleGetNotesRequest);
  yield takeLatest(DELETE_NOTE_REQUEST, handleDeleteNoteRequest);
  yield takeLatest(UPDATE_NOTE_REQUEST, handleUpdateNoteRequest);
}

function* handleCreateNoteRequest(action) {
  try {
    const { data } = yield call(Api.createUsers, action.payload.id, action.payload.body);
    yield put({
      type: CREATE_NOTE_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: CREATE_NOTE_FAIL,
      payload: { error: true },
    });
  }
}

function* handleGetNotesRequest(action) {
  try {
    const { data } = yield call(Api.getNotes, action.payload.id);
    yield put({
      type: GET_NOTES_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_NOTES_FAIL,
      payload: { error: true },
    });
  }
}

function* handleDeleteNoteRequest(action) {
  try {
    const { data } = yield call(Api.deleteNote, action.payload.noteId, action.payload.userId);
    yield put({
      type: DELETE_NOTE_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: DELETE_NOTE_FAIL,
      payload: { error: true },
    });
  }
}

function* handleUpdateNoteRequest(action) {
  try {
    const { data } = yield call(
      Api.updateNote,
      action.payload.noteId,
      action.payload.userId,
      action.payload.body,
    );
    yield put({
      type: UPDATE_NOTE_SUCCESS,
      payload: { data },
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: UPDATE_NOTE_FAIL,
      payload: { error: true },
    });
  }
}
