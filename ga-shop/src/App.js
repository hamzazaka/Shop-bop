import './App.css';
import Navbar from './components/NavBar';
import Banner from "./components/Banner";
import Products from './components/Products';
import About from './components/AboutUs';
import { Route, Switch} from 'react-router-dom'
import Cart from './components/Cart';
function App() {
  return (
    <div>
      
        <Navbar/>
        <Banner/>
        <Switch>
      <Route
              exact 
              path="/"
              render={() => <Products />}
            />
       <Route
              exact 
              path="/About"
              render={() => <About />}
            />
       </Switch>
    </div>
  );
}

export default App;
