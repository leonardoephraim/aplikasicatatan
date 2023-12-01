import React, { useEffect, useState } from 'react';
import './App.css';
import Note from './note';

const App = () => {
  const notesData = [
    { title: 'Catatan 1', createdAt: '10-10-2023', body: 'Halo, Nama saya Leonardo Ephraim Reinhart' },
    { title: 'Catatan 2', createdAt: '15-10-2023', body: 'Saya mengikuti program Studi Independen VOCASIA' },
    { title: 'Catatan 3', createdAt: '25-10-2023', body: 'Sekarang saya sedang membuat program aplikasi catatan v1' },
    { title: 'Catatan 4', createdAt: '5-11-2023', body: 'akan dilanjutkan pada program aplikasi catatan v2' },
    { title: 'Catatan 5', createdAt: '15-11-2023', body: 'terima kasih' },
  ];

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(notesData);
  }, [notesData]);

  const handleBackToHomeClick = () => {
    window.location.reload();
  };

  const renderNotes = () => {
    return notes.map((note, index) => (
      <Note key={index} title={note.title} createdAt={note.createdAt} body={note.body} />
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="my-4 text-center">Catatan Saya</h1>

      <div className="row">
        <div className="col-2 mb-4">
          <button onClick={handleBackToHomeClick} className="btn btn-outline-primary btn-block btn-sm">
            <i className="fas fa-home"></i> Home
          </button>
        </div>
      </div>

      <div className="my-4 row">{renderNotes()}</div>
    </div>
  );
};

export default App;