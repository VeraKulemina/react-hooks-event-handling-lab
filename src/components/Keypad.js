import React from 'react';

function Keypad (){
    function handleGange(event){
    console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={handleGange}/>
        </div>
    )
}

export default Keypad;