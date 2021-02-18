import React from 'react';

function UseDetails({blogs}) {
    return (
        <div>
            {blogs.title}
            {blogs.content}
        </div>
    )
}

export default UseDetails;
