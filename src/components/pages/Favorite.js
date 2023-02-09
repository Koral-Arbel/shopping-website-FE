import { useEffect, useState } from "react";
import { usernamelog } from "../registration/Login";
import axios from "axios";

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [newFavorite, setNewFavorite] = useState("");
  const url = new URL(
    "http://localhost:8080/ecommerce/item/favorite/get/list/",
  );
  useEffect(() => {
    // Retrieve the list of favorites from the server
    const getFavorites = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/ecommerce/item/favorite/get/list/",
        );
        setFavorites(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getFavorites();
  }, []);

  // Add a new favorite item to the list
  const handleAdd = async () => {
    try {
      // Make a POST request to the server to add the item to the list
      await axios.post("http://localhost:8080/ecommerce/favorite/create/", {
        item: newFavorite,
      });

      // Refresh the list of favorites
      const response = await axios.get(
        "http://localhost:8080/ecommerce/item/favorite/get/list",
      );
      setFavorites(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Remove an existing favorite item from the list
  const handleRemove = async (item) => {
    try {
      // Make a DELETE request to the server to remove the item from the list
      await axios.delete(
        `http://localhost:8080/ecommerce/favorite/delete/${item}`,
      );

      // Refresh the list of favorites
      const response = await axios.get(
        "http://localhost:8080/ecommerce/item/favorite/get/list",
      );
      setFavorites(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const params = { username: usernamelog };
  for (const key in params) {
    url.searchParams.append(key, params[key]);
  }
  const [items, setItems] = useState();
  const getApiData = async () => {
    const response = await fetch(url).then((response) => response.json());
    setItems(response);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div>
        <h2>Favorite List</h2>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite}>
              {favorite}
              <button onClick={() => handleRemove(favorite)}>Remove</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
}

export default Favorite;
