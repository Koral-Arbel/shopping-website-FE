import React from "react";

function ItemsList({ item }) {
  return (
    <div className="card-deck">
      {item.map((item) => (
        <div className="card mb-4" key={item.id}>
          <img className="card-img-top" src={item.imageUrl} alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">${item.price}</p>
            <p className="card-text">
              <small className="text-muted">{item.stock} in stock</small>
            </p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
