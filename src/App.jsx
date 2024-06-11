import React from "react";
import Notes from "./Components/Notes";
import NotesLocalStorage from "./Components/NotesLocalStorage";
import DataFetch from "./Components/Api/DataFetch";
import Crowsel from "./Components/Crowsel/Crowsel";
import CountDown from "./Components/CountDownTimer/CountDown";
import CrudNotes from "./Components/CrudNotes/CrudNotes";
import Modal from "./Components/Modal/Modal";

const App = () => {
  return (
    <div>
      {/* <Notes /> */}
      {/* <NotesLocalStorage /> */}
      {/* <DataFetch /> */}
      {/* <Crowsel /> */}
      {/* <CountDown /> */}
      {/* <CrudNotes /> */}
      <Modal />
    </div>
  );
};

export default App;
