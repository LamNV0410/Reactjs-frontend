import './App.css';
import Page from './components/Page';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Product from './components/Product';
import Cart from './components/Cart';
import ProductDetail from './components/Product-Detail';
import { useEffect } from 'react';
import LoginAndRegister from './components/LoginAndRegister';

function App() {
  useEffect(() => {
    console.log();
  })
  return (
    <Router>

      <div className="App">
        {/* ----------------------- header .--------------------------------------------- */}
        <Switch>
          <Route exact path="/">
            <Header />
            <Page />
          </Route>
          <Route exact path="/products">
            <Header />
            <Product />
          </Route>
          <Route exact path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route exact path='/product-detail/:id'>
            <Header />
            <ProductDetail />
          </Route>
          <Route exact path='/login-and-register'>
            <LoginAndRegister />
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
