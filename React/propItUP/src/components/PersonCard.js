import React, {Component} from 'react';

class PersonCard extends React.Component{
    render(){
        const {fName, lName, age, hairColor}=this.props;
        return(
            
            <div>
                <h1>{lName}, {fName}</h1>
                <h4>Age : {age}</h4>
                <h4>Hair Color : {hairColor}</h4>
                <br></br>
            </div>
        );
    }
}
export default PersonCard;