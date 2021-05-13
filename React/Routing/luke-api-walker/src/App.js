import './App.css';
import {Router} from '@reach/router';
import Display from './components/Display';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search></Search>

      <Router>
        <Display path="/:category/:id"></Display>
      </Router>
    </div>
  );
}

export default App;
