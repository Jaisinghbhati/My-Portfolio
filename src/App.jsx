import React, { useRef, useState } from 'react';
import Header from './components/Header';
import StickyNote from './components/StickyNote';
import Footer from './components/Footer';
import { FaPlus } from 'react-icons/fa';

const App = () => {
  const [notes, setNotes] = useState([{ id: 1, title: 'Title 1' }]);
  const [noteCount, setNoteCount] = useState(1);

  const addNote = () => {
    if (noteCount >= 4) return;
    const newNote = {
      id: noteCount + 1,
      title: 'New Title',
    };
    setNotes([...notes, newNote]);
    setNoteCount(noteCount + 1);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setNoteCount(noteCount - 1);
  };

  const ref = useRef(null)

  return (
    <div ref={ref} className="flex flex-col min-h-screen bg-[#0f172a]">
      <Header />
      <div className="flex justify-center items-center flex-wrap">
        {notes.map((note) => (
          <StickyNote key={note.id} id={note.id} title={note.title} onDelete={deleteNote} reference={ref}/>
        ))}
        {noteCount < 4 && (
          <button className="w-12 h-12 rounded-full flex items-center justify-center mb-4" onClick={addNote}>
         
          <FaPlus className="text-white"  />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
