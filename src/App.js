 
import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
         .then(respo=>respo.json())
         .then(posts=>setPosts(posts.quotes))
    },[]);
  return (
    <div className="App"> 
     {posts.map((post,index)=>
       <h1 key={index}>{post.quote}</h1>
    )}
    </div>
  );
}

export default App;
