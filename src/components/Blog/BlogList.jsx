import React from 'react'
import BlogDetails from './BlogDetails';

const BlogList = ({posts}) => {
    return (
        
        <div>
            {posts && posts.map(post => (
                <BlogDetails key={post.id} post={post} />
            ))}
        </div>
    );
}

export default BlogList;