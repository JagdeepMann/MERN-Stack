import React from 'react';

const Param = (props) => {
    const styleObject={
        backgroundColor: props.bg,
        color:props.text
    }

    return (
        <div>
            {  
                !isNaN(props.id)?<h1>The number is: {props.id}</h1>:<h1 style={styleObject} >The word is : {props.id}</h1>
            }          
        </div>
    );
};

export default Param;