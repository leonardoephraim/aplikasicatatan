import React from 'react';
import { Link } from 'react-router-dom';
import { useNoteState } from '../noteContext';
import { useAuth } from '../context/authContext';

const Home = () => {
  const { notes } = useNoteState();
  const { logout } = useAuth();

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const handleLogout = () => {
    logout();
  };

  const renderNotes = () => {
    return notes.map((note, index) => (
      <div key={index} className="card mx-2">
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#007bff' }}>{note.title}</h5>
          <p className="card-text" style={{ color: '#6c757d' }}>Waktu Pembuatan: {formatDate(note.createdAt)}</p>
          <p className="card-text" style={{ color: '#212529' }}>{note.body}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <div className="text-center w-100">
          <h1>Catatan Saya</h1>
        </div>
        <div>
          <button onClick={handleLogout} className="btn btn-danger ml-2">
            Logout
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-2 mb-4">
          <Link to="" className="btn btn-outline-primary btn-block btn-sm">
            <i className="fas fa-home"></i> Home
          </Link>

          <Link to="/add" className="btn btn-outline-primary btn-block btn-sm mt-2">
            <i className="fas fa-plus"></i> Tambah Catatan
          </Link>
        </div>
      </div>

      <div className="my-4 row">{renderNotes()}</div>
    </div>
  );
};

export default Home;
