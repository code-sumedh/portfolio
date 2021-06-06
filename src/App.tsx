
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { HomeComponent } from './components/home/Home';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={() => (
        <div className="App">
          <Header/>
          <HomeComponent userName={"Sumedh"} />
        </div>
      )} />
    </Router>
  );
}

export default App;
