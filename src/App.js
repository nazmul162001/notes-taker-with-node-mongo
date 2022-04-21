import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import InputForm from "./components/inputForm/InputForm";
import NoteCard from "./components/noteCard/NoteCard";
import { useEffect, useState } from "react";

let allNotes = [
  {
    _id: 1,
    user_name: "oshan",
    data: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    _id: 2,
    user_name: "sagar",
    data: "This is a widerThis is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    _id: 3,
    user_name: "oshan",
    data: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
  {
    _id: 4,
    user_name: "kshan",
    data: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
  },
];

function App() {
  const [notes, setNotes] = useState([]);
  // const [searchInput, setSearchInput]=useState('')

  useEffect(() => {
    setNotes(allNotes);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(event.target.searchText.value);

    let p = allNotes.filter(
      (note) => note.user_name == event.target.searchText.value
    );
    setNotes(p)
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  const handlePost=(event)=>{
     event.preventDefault();
     console.log('this is post')
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <InputForm handlePost={handlePost} />
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        {notes.map((note) => (
          <NoteCard
            note={note}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
