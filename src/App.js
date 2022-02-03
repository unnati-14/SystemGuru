import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'; 
import Concept from './Components/Concept';
function App() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
    <div className="App">
    <switch>
    <Route exact path="/" component={Navbar} />
    <Route path="/concept" component={Concept} />
    </switch>
    </div>
    </Router>
    // <div className="App">
    //   <Navbar />
    //   <Concept />
    // </div>
  );
}

export default App;
