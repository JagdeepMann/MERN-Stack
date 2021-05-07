import {Component} from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state={
            age: props.age
        }
    }

    ageIncrement =()=>{this.setState({age: this.state.age+1})}

    render(){
        const {fName, lName, age, hairColor}=this.props;
        return(
            <div>
                <h1>{lName}, {fName}</h1>
                <h4>Age : {this.state.age}</h4>
                <h4>Hair Color : {hairColor}</h4>
                <br></br>
                <button onClick={this.ageIncrement} >Click here!</button>
            </div>
        );
    }
}
export default PersonCard;