import React, { useEffect, useState } from 'react';
import './App.css';
// import Posts from './components/admin/posts';
import { Posts } from './components/crud/Posts';
// import {  PostLoading } from './components/crud/PostLoading';
// import PostLoadingComponent from './components/posts/postLoading';
import { axiosInstance } from './axois';

// export function Admin() {
// 	const PostLoadingComp = <PostLoading Component = {<Posts></Posts>}></PostLoading>;
// 	const [appState, setAppState] = useState({
// 		loading: true,
// 		posts: null,
// 	});

// 	useEffect(() => {
// 		axiosInstance.get().then((res) => {
// 			const allPosts = res.data;
// 			setAppState({ loading: false, posts: allPosts });
// 			console.log(res.data);
// 		});
// 	}, [setAppState]);

// 	return (
// 		<div className="App">
// 			<h1>Latest Posts</h1>
// 			<PostLoadingComp isLoading={appState.loading} posts={appState.posts} />
// 		</div>
// 	);
// }

export function Admin() {
  const [data, setData] = useState(null); // Use null for initial state to handle loading state
  const [error, setError] = useState(null);

    const fetchData = async () => {
      let count = 0 
    try {
      console.log("acc token " + localStorage.getItem('access_token'));
      console.log('refesh ' + localStorage.getItem("refresh_token"))
      const { data } = await axiosInstance.get('/admin/getposts');
      console.log("count " + count);
        count = count + 1
      console.log("all post of the user" + data);
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
        <div className="w-full">
        {console.log(data)}
                  
                  
        <Posts posts = {data}></Posts>
          
        </div>
      ) : (
        <p>Loading...</p> // Display loading state while waiting for data
      )}
    </div>
  );
}

