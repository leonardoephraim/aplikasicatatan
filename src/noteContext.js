import React, { createContext, useContext, useReducer } from 'react';

const NoteContext = createContext();
const AuthContext = createContext();

export const NoteProvider = ({ children }) => {
  const initialState = {
    notes: [
      { title: 'Catatan 1', createdAt: '10-10-2023', body: 'Halo, Nama saya Leonardo Ephraim Reinhart' },
      { title: 'Catatan 2', createdAt: '10-15-2023', body: 'Saya mengikuti program Studi Independen VOCASIA' },
      { title: 'Catatan 3', createdAt: '10-26-2023', body: 'Sekarang saya sedang membuat program aplikasi catatan v3' },
      { title: 'Catatan 4', createdAt: '11-5-2023', body: 'ini adalah versi terakhir dari tugas ini' },
      { title: 'Catatan 5', createdAt: '11-15-2023', body: 'Terima kasih' },
    ],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return { ...state, notes: [...state.notes, action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteState = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteState must be used within a NoteProvider');
  }
  return context.state;
};

export const useNoteDispatch = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteDispatch must be used within a NoteProvider');
  }
  return context.dispatch;
};

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
