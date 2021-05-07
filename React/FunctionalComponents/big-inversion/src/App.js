// import logo from './logo.svg';
import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  return (
    <div className="App">
      <div>
      <PersonCard firstName="Jane" lastName="Doe" age={ 45 } hairColor="Black" /> 
      </div>
      <br></br>
      <div>
        <PersonCard firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
      </div>
      <br></br>
      <div>
        <PersonCard firstName="Millard" lastName="Fillmore" age={ 50 } hairColor="Brown" /> 
      </div>
      <br></br>
      <div>
        <PersonCard firstName="Maria" lastName="Smith" age={ 62 } hairColor="Brown" /> 
      </div>
    </div>
  );
}

export default App;
