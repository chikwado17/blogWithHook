import React, { useState } from 'react';




const BlogForm = ({addNewPost}) => {


    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        addNewPost({
            id: new Date(),
            title: postTitle,
            body: postBody
        });
    }

    return (
        <form className="ui form" onSubmit={handlePostSubmit}>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} placeholder="Post Title" />
            </div>
            <div className="field">
                <label>Body</label>
                <input type="text" name="body" value={postBody} onChange={(e) => setPostBody(e.target.value)} placeholder="Post body" />
            </div>
            <button className="ui button primary" type="submit">Add</button>
        </form>
    );
}

export default BlogForm;
