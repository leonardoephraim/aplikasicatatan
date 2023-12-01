import React, { useState } from 'react';

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    if (title.trim() === '' || body.trim() === '') {
      alert('Judul dan isi catatan tidak boleh kosong!');
      return;
    }

    onAddNote({ title, body });


    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h2>Tambah Catatan</h2>
      <div>
        <label>Judul:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Isi Catatan:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      </div>
      <button onClick={handleSubmit}>Tambah Catatan</button>
    </div>
  );
};

export default AddNote;
