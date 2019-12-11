import React, { useState } from 'react';
import Header from './Header'
import Input from './Input'
import Note from './Note'
import Footer from './Footer'


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes([...notes, newNote])

  }

  function deleteNote(id) {
    setNotes(notes.filter((note, index) => {
      return index !== id
    }))
  }

  return (
    <div>
      <Header />
      <Input onClick={addNote} />
      {notes.map((note, index) => <Note key={index} id={index} heading={note.heading} content={note.content} onClick={deleteNote} />)}
      <Footer />
    </div>
  )
}

export default App;
