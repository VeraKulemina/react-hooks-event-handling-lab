import React from 'react';

function EyesOnMe(){
    function handleFocus(event){
        console.log("Good!");
        }
    function handleBlur(event){
            console.log("Hey! Eyes on me!");
            }
    return(
        <>
        <button text="Eyes on me" onFocus={handleFocus} onBlur={handleBlur}>Hi</button>
        </>
    )
}
export default EyesOnMe;
