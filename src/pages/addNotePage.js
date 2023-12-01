import React, { useState } from 'react';
import './addNotePage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useNoteDispatch } from '../noteContext';

const AddNotePage = () => {
  const dispatch = useNoteDispatch();
  const navigate = useNavigate();

  const [note, setNote] = useState({
    title: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting note:', note);


    saveNoteToLocalStorage(note);

    navigate('/');
  };

  const saveNoteToLocalStorage = (note) => {

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];

    const updatedNotes = [...existingNotes, note];

    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    dispatch({ type: 'ADD_NOTE', payload: note });
  };

  return (
    <div className="container mt-5">
      <h1 className="my-4 text-center">Tambah Catatan</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="noteTitle">Judul Catatan:</label>
          <input
            type="text"
            className="form-control"
            id="noteTitle"
            name="title"
            value={note.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="noteBody">Isi Catatan:</label>
          <textarea
            className="form-control"
            id="noteBody"
            name="body"
            value={note.body}
            onChange={handleChange}
            rows="6"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Simpan Catatan
        </button>
        <Link to="/" className="btn btn-danger ml-2">
          Kembali
        </Link>
      </form>
    </div>
  );
};

export default AddNotePage;
