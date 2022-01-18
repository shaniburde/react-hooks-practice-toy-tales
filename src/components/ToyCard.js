import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  const { id, name, image, likes } = toy

  function handleDelete(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
    })
    .then((r) => r.json())
    .then(() => {onDeleteToy(toy);})
  }

  function handleLike(){
    const updateObj = {
      likes: toy.likes + 1,
    }; 

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(updateObj)
    })
    .then((r) => r.json())
    .then(onUpdateToy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"❤️"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
