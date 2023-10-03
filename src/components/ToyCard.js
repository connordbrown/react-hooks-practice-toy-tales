import React, { useState } from "react";

function ToyCard({id, name, image, likes, onDeleteClick}) {
  const [numLikes, setNumLikes] = useState(likes);

  function handleLikeClick(toyID) {
    fetch(`http://localhost:3001/toys/${toyID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "likes": numLikes+1
      }) 
    })
    .then(response => response.json())
    .then(data => setNumLikes(data.likes))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{numLikes} Likes </p>
      <button className="like-btn" onClick={() => handleLikeClick(id)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => onDeleteClick(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
