import React from 'react';


const BlogDetails = ({post}) => {
    return(
        <div className="ui segment">
            <div className="ui middle aligned divided list">
                <div className="item">
                    <div className="content">
                        <h1>{post.title}</h1>
                        <h5>{post.body}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;