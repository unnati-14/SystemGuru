import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'; 
import Concept from './Components/Concept';
import Interview from './Components/Interview';
function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
    <div className="App">
    <switch>
    <Route exact path="/" component={Navbar} />
    <Route path="/concept" component={Concept} />
    <Route path="/interview" component={Interview} />
    </switch>
    </div>
    </Router>
  );
}

export default App;
