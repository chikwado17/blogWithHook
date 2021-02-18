import React from 'react';
import UseDetails from './UseDetails';

const UseStateArray = ({blog}) => {
    return(
        <div>
            {blog && 
            <div>
                {blog.map((blogs, index) => (
                    <UseDetails key={index} blogs={blogs}/>
                ))}
            </div>}
        </div>
    );
}

export default UseStateArray;