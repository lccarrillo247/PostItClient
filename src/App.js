import './App.css';
import Board from './Components/Board/Board';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([])

  const createPost = (newPost) => {
    setPosts(
        [...posts, newPost]
    )
}

console.log(posts);

  return (
    <div>
      <h1 className='titulo'>Ánimo 😊</h1>
      <div className='container'>
      <Sidebar
      createPost={createPost}
      />
      <Board
      posts={posts}
      />
      </div>
    </div>
  );
}

export default App;
