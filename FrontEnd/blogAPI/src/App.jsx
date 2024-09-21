import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import { PostCard } from "./components/PostCard";
import { axiosInstance } from "./axois";
// import axios from "axios";
function ListPosts() {
  const [data, setData] = useState(null); // Use null for initial state to handle loading state
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      console.log("acc token " + localStorage.getItem('access_token'));
      console.log('refesh ' + localStorage.getItem("refresh_token"))
      const { data } = await axiosInstance.get();
      
      console.log("data = " + data);
      setData(data); // Assuming data is an array and you want the first element
    } catch (err) {
      console.log("Error fetching data:", err);
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
        <div className="grid grid-cols-2 gap-4 p-4  md:grid-cols-4">
          
          {console.log(data)}
          {data.map(datas => {
            return <PostCard props={datas}></PostCard>
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
       <ListPosts></ListPosts>
    </div>
  );
}

export default App;
