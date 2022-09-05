import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import {
  createNote, deleteNotes, getNotes, updateNotes,
} from './store/actions/notes';

require('dotenv').config();

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('body');

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [mIsOpen, setMIsOpen] = useState(false);
  const [id, setId] = useState('');
  const [note, setNote] = useState({ note: '' });
  const [usId, setUsId] = useState('');
  const [notId, setNotId] = useState('');

  // const handelChange = useCallback((key, val) => {
  //     value[key] = val;
  //     setValue({...value})
  //     }, [value])

  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes.data);

  useEffect(() => {
    dispatch(getNotes(1));
  }, [notes.count]);

  console.log('note=====>>>>', notes);

  const handleDelete = useCallback((noteId, userId) => {
    dispatch(deleteNotes(noteId, userId));
  }, []);

  const handleUpdateNote = useCallback((id, userId) => {
    setMIsOpen(true);
    setUsId(id);
    setNotId(userId);
  }, []);

  const updateNote = useCallback(() => {
    console.log(usId, notId, note, 919191919191);
    dispatch(updateNotes(usId, notId, note));
    setMIsOpen(false);
  }, [usId, notId, note]);

  const handleCreateUser = useCallback(() => {
    // harcnelll
    console.log(id, note, 'siiiiik');
    dispatch(createNote(id, note));
    setIsOpen(false);
  }, [id, note]);
  console.log(notes, 99999);
  return (
    <div>
      <h1>
        Notes Count
        {notes?.count}
      </h1>
      <div className="div">
        <h2>Notes List</h2>
        <button type="button" className="button" onClick={() => setIsOpen(true)}>Add Note</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
        style={customStyles}
      >
        <label htmlFor="note">Note</label>
        <input
          type="text"
          placeholder="Note"
          id="note"
          onChange={(ev) => setNote({ note: ev.target.value })}
        />
        <br />
        <label htmlFor="user">UserId</label>
        <input
          type="number"
          placeholder="UserId"
          id="user"
          onChange={(ev) => setId(ev.target.value)}
        />
        <br />
        <button type="button" onClick={() => handleCreateUser()} className="add">Add Note</button>
      </Modal>
      <Modal
        isOpen={mIsOpen}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
        style={customStyles}
      >
        <label htmlFor="unote">Update Note</label>
        <input
          type="text"
          placeholder="Update Note"
          id="unote"
          onChange={(ev) => setNote({ note: ev.target.value })}
        />
        <br />
        <button onClick={() => updateNote()} className="add">Update Note</button>
      </Modal>
      <ul>
        {
                notes?.results?.map((note) => (
                  <li className="li" key={note.id}>
                    {note.note}
                    <button type="button" className="del" onClick={() => handleDelete(note.id, note.author)}>Delete</button>
                    <button type="button" className="up" onClick={() => handleUpdateNote(note.id, note.author)}>Update</button>
                  </li>
                ))
            }
      </ul>
    </div>
  );
}

export default App;
