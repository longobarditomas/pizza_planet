import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Products from './Components/Product/Products';
import PaymentConfirmation from './Components/Payment/Confirmation';
import PaymentError from './Components/Payment/Error';
import CartState from "./Context/Cart/CartState";

function App() {
  return (
    <CartState>
    <BrowserRouter>
      <div className="App">
        <Link to="/"><img src="/pizza_planet.png" alt="planet-pizza" style={{width:"300px"}} /></Link>
        <Switch>
          <Route exact path="/" component={() => <Products/> }/>
          <Route exact path="/payment_confirmation" component={() => <PaymentConfirmation/> }/>
          <Route exact path="/payment_error" component={() => <PaymentError/> }/>
        </Switch>
      </div>
    </BrowserRouter>
    </CartState>
  );
}

export default App;