import React, { useState } from 'react';

const HooksTwo = () =>  {
    const [ name, setName ] = useState({ firstName: '', lastName: '' });



   const handleInputChange1 = (e) => {
       setName({
            ...name,
            firstName: e.target.value
       });
   }

   const handleInputChange2 = (e) => {
    setName({
        ...name,
        lastName: e.target.value
    })
}



    return (
        <div>
            <h1>FirstName: { name.firstName } && LastName: { name.lastName } </h1>
            <input onChange={handleInputChange1} type="text"  value={name.firstName}/>
            <input onChange={handleInputChange2} type="text"  value={name.lastName} />
        </div>
    )
}

export default HooksTwo
