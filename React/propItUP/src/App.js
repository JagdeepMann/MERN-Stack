
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (

      <div className="App">
        <div>
            <PersonCard
            fName={"Jane"} lName={"Doe"} 
            age={45}
            hairColor={"Black"}>
            </PersonCard>

            
            <PersonCard 
            fName={"John"} lName={"Smith"}
            age={45}
            hairColor={"Brown"}>
            </PersonCard>

            <PersonCard 
            fName={"Fillmore"} lName={"Millard"}
            age={50}
            hairColor={"Brown"}>
            </PersonCard>

            <PersonCard 
            fName={"Smith"} lName={"Maria"}
            age={62}
            hairColor={"Brown"}>
            </PersonCard>
        </div>
      </div>

  );
}

export default App;
