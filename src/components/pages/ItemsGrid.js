import React from "react";

function AvailableItemsGrid({ items }) {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
          <div className="card mb-3">
            <img className="card-img-top" src={item.imageUrl} alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">
                <small className="text-muted">${item.price}</small>
              </p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AvailableItemsGrid;
