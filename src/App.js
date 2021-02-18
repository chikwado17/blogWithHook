import React, { useState } from 'react';
import BlogForm from './components/Blog/BlogForm';
import BlogList from './components/Blog/BlogList';
import { data } from './components/data/data';


const App = () => {
  const [posts, setPosts] = useState(data);

  const addNewPost = (post) => {
    setPosts(prevState => [...prevState, post]);
  } 

  return(
    <div style={{marginTop:'20px'}} className="ui container">
        <div>
          <BlogList posts={posts}/>
        </div><br/>
        <h3>Add Post</h3>
        <BlogForm addNewPost={addNewPost} />
    </div>
  );
}
export default App;
