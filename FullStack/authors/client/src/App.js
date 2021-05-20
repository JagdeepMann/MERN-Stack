
import './App.css';
import {Router, Link} from '@reach/router';
import AllAuthors from "./components/AllAuthors";
import CreateAuthor from "./components/CreateAuthor";
import UpdateAuthor from "./components/UpdateAuthor";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
      <h1>Favorite authors</h1>
      
      <Router>
        <AllAuthors path='/'></AllAuthors>
        <CreateAuthor path='/authors/create'></CreateAuthor>
        <UpdateAuthor path="/authors/update/:id"></UpdateAuthor>

      </Router>
      </div>
    </div>
  );
}

export default App;
