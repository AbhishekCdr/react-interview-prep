import React from "react";
import Notes from "./Components/Notes";
import NotesLocalStorage from "./Components/NotesLocalStorage";
import DataFetch from "./Components/Api/DataFetch";

const App = () => {
  return (
    <div>
      {/* <Notes /> */}
      <NotesLocalStorage />
      {/* <DataFetch /> */}
    </div>
  );
};

export default App;
