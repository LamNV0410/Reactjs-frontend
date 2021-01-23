import './App.css';
import Page from './components/Page';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <Router>

      <div className="App">
        {/* ----------------------- header .--------------------------------------------- */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Page />
          </Route>
          <Route exact path="/products">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
        {/* -----------------------------footer------------------------ */}
        <Footer />
      </div>


    </Router>

  );
}

export default App;
