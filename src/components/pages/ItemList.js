import Card from "../registration/shop/Card";
import { useEffect, useState } from "react";
import "./ItemList";

function ItemList(props) {
  const [items, setItems] = useState();
  const [error, setError] = useState("");
  const getApiData = async () => {
    const response = await fetch("http://localhost:8080/ecommerce/item/getAll")
      .then((response) => response.json())
      .catch((error) => {
        console.log("Got an error when calling api:" + error.message());
        throw error;
      });
    setItems(response);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <h1>BUY NOW:</h1>
      <div className="itemGrid">
        {error && <h3>{error}</h3>}
        {items &&
          items.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              price={item.price}
              quantityAvailable={item.quantityAvailable}
              id={item.itemId}
            />
          ))}
      </div>
    </div>
  );
}
export default ItemList;
