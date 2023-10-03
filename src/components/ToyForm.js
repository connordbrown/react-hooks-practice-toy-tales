import React, { useState } from "react";

function ToyForm({toyList, setToyList}) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "image": imgUrl,
        "likes": 0
      })
    })
    .then(response => response.json())
    .then(newToy => {
      const updatedToys = [...toyList, newToy];
      setToyList(updatedToys);
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          value={imgUrl}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(event) => setImgUrl(event.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
