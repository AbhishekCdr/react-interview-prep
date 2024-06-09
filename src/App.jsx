import React from "react";
import Notes from "./Components/Notes";
import NotesLocalStorage from "./Components/NotesLocalStorage";
import DataFetch from "./Components/Api/DataFetch";
import Crowsel from "./Components/Crowsel/Crowsel";

const App = () => {
  return (
    <div>
      {/* <Notes /> */}
      {/* <NotesLocalStorage /> */}
      {/* <DataFetch /> */}
      <Crowsel />
    </div>
  );
};

export default App;
