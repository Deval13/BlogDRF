import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function ExampleComponent() {
  const [data, setData] = useState(null); // Use null for initial state to handle loading state
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api");
      setData(data); // Assuming data is an array and you want the first element
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData in useEffect
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }

  return (
    <div>
      {data ? (
        <div>
          <p>HI from second component</p>
          {console.log(data)}
          {data.map(datas => {
            return <div>Name is {datas.author} data is { datas.id }</div>
          })}
          {/* Render other data fields as necessary */}
        </div>
      ) : (
        <p>Loading...</p> // Display loading state while waiting for data
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hi there</h1>
      <ExampleComponent />
    </div>
  );
}

export default App;
