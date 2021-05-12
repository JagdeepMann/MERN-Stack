import {Router, Link} from '@reach/router';
import './App.css';
import Home from "./components/Home";
import Param from "./components/Param";


function App() {
  return (
    <div className="App">
      <Link to="/home">Home</Link> - 
      <Link to="/"> All Routes</Link>
      
      //props are properties that are passed from App.js to components 
      <Router>
        <div path ="/"></div>
        <Home path="/home"></Home>
        <Param path="/:id"></Param>
        <Param path="/:id/:text"></Param>
        <Param path="/:id/:text/:bg"></Param>
      
      </Router>
    </div>
  );
}

export default App;
