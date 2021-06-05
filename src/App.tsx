
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { HomeComponent } from './components/home/Home';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={() => (
      <div className="App">
        <header className="App-header">
          <HomeComponent userName={"Sumedh"} />
        </header>
      </div>
      )} />
    </Router>
  );
}

export default App;
