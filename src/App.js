import './App.css';
import {useState, useEffect} from 'react';
import Post from './Post';
import Pagination from './Pagination';

const url = 'https://jsonplaceholder.typicode.com/posts';


function App() {
const [posts, setPosts] = useState([]);
const [error, setError] = useState('');

useEffect(() => {
  fetch(url).then(
    response => {
      if(response.ok) return response.json();
      throw new Error('something went wrong while requesting posts');
    })
    .then( posts => setPosts(posts))
    .catch( error => setError(error.message));
  }, []);
  console.log(posts);

  if(error) return <h1>{error.message}</h1>;
  return (
    <div className="App">
      {posts.length > 0 ? (
        <>
        <Pagination
        data={posts}
        RenderComponent={Post}
        title="Posts"
        pageLimit={5}
        dataLimit={10}
        />
        </>
      ) : (
        <h1>No Posts to display here!</h1>
      )}
    </div>
  );
}

export default App;
