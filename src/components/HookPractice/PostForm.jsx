import React, { useState } from 'react';


const PostForm = ({handleAddPost}) => {

    const [blogtitle, getBlogTitle] = useState("");
    const [blogcontent, getBlogContent] = useState("");


    const handleInputChange1 = (ew) => {
        getBlogTitle(ew.target.value);
    }

    const handleInputChange2 = (eee) => {
        getBlogContent(eee.target.value);
    }

    const handleFormSubmit = (ee) => {
        ee.preventDefault();
        handleAddPost({
            id: Math.random() * 1000,
            title: blogtitle,
            content: blogcontent
        });
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleInputChange1} value={blogtitle}/>
                </div>
                <br/>
               <div>
                    <label htmlFor="content">Content</label>
                    <input onChange={handleInputChange2} type="text" id="content" value={blogcontent} />
                </div> 
                <div>
                    <button type="submit">Add Post</button>
                </div>
            </form>
        </div>
    )
}

export default PostForm;