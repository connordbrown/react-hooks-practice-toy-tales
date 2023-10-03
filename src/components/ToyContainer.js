import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, onDeleteClick }) {
  const toys = toyList.map(toy => {
    return <ToyCard key={toy.id}
                    id={toy.id}
                    name={toy.name}
                    image={toy.image}
                    likes={toy.likes}
                    onDeleteClick={onDeleteClick}
    />
  })

  return (
    <div id="toy-collection">{toys}</div>
  );
}

export default ToyContainer;
