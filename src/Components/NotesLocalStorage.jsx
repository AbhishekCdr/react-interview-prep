import React, { useEffect, useState } from "react";

const NotesLocalStorage = () => {
  const [note, setNote] = useState([]); //array to store the notes with id
  const [newNote, setNewNote] = useState(""); //array to temp store newnote from user input

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNote(storedNotes);
    }
  }, []);

  function addNote(event) {
    event.preventDefault();

    if (newNote.trim()) {
      //if entry is not emply then only
      const Note = { text: newNote, id: note.length + 1 }; //note schema object
      const updatedNotes = [Note, ...note];
      setNote(updatedNotes); //add previous note with the latest one
      setNewNote(""); //set input to empty after adding
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
  }

  function onChangeHandler(event) {
    //change of value in input
    setNewNote(event.target.value);
  }

  function deleteNote(id) {
    const updatedNotes = note.filter((note) => note.id !== id);
    setNote(updatedNotes);

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  return (
    <div>
      <div>
        <form onSubmit={addNote}>
          <input
            value={newNote}
            placeholder="enter your text"
            onChange={onChangeHandler}
          />
          <button type="submit">Save</button>
        </form>
      </div>
      <div>
        <ul
          style={{
            listStyleType: "number",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {note.map((note) => (
            <div key={note.id} style={{ display: "flex", gap: "10px" }}>
              <li>{note.text}</li>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesLocalStorage;
