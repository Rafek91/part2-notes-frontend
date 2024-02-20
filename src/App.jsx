import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes,setNotes] = useState([])
  const [newNote,setNewNote] = useState('')
  const [showAll,setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const notesObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    setNotes([...notes,notesObject])
    setNewNote('')
  }

  const handleInputChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input  
        value={newNote}
        onChange={handleInputChange}
        />
        <button type='submit'>Add note</button>
      </form>
      <button onClick={() => setShowAll(!showAll)}>{showAll ? 'Show all' : 'Show filtered'}</button>
    </div>
  )
}

export default App