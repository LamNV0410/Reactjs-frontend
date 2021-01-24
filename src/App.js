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
import ProductDetail from './components/Product-Detail';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log();
  })
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

          <Route exact path='/product-detail/:id'>
            <ProductDetail />
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
