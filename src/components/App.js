import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => response.json())
    .then(data => setToyList(data))
  }, [])

  function handleDelete(toyID) {
    fetch(`http://localhost:3001/toys/${toyID}`, {
      method: "DELETE"
    })
    .then(() => {
      const toysAfterDelete = toyList.filter(toy => {
        return toy.id !== toyID;
      })
      setToyList(toysAfterDelete);
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm toyList={toyList} setToyList={setToyList} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList={toyList} onDeleteClick={handleDelete} />
    </>
  );
}

export default App;
