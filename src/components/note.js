import React from 'react';

const Note = ({ title, createdAt, body }) => {
  return (
    <div className="card mx-2">
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#007bff' }}>{title}</h5>
        <p className="card-text" style={{ color: '#6c757d' }}>Waktu Pembuatan: {createdAt}</p>
        <p className="card-text" style={{ color: '#212529' }}>{body}</p>
      </div>
    </div>
  );
};

export default Note;