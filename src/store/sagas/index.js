import { all, fork } from 'redux-saga/effects';
import notes from './notes';

export default function* watchers() {
  yield all([
    notes,
  ].map(fork));
}
