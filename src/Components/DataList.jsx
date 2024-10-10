import React, { useEffect, useState } from "react";

function DataList() {
  const [data, setData] = useState([]);

  console.log(data);

  // fetch data from the API and set the data in the state
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="data-list-container">
      {data?.length > 0 && <h1>Products List</h1>}
      {/* check if the data is available then display it otherwise show the loader */}
      {data?.length > 0 ? (
        <ul>
          {/* map through the data and display it */}
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="loader">
          <span></span>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default DataList;
