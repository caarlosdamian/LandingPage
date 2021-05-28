import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
