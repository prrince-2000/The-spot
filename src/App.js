import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './common/Header/Header';
import Data from './components/flashDeals/Data';
import Pages from './pages/Pages';
import Cart from './common/cart/Cart'

function App() {
  const {productItems} = Data

  const [cartItem, setCardItem] = useState([])

  const addToCart =(product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if(productExit){
      setCardItem(cartItem.map((item) => (item.id === product.id? {...productExit, qty : productExit.qty + 1}: item)))
    } else{
      setCardItem([...cartItem, {...product,qty:1}])
    }
  }
  return (
    <>
    <Router>
      <Header cartItem = {cartItem}/>
        <Switch>
          <Route path='/' exact>
            <Pages productItems = {productItems} addToCart={addToCart}/>
          </Route>
          <Route path='/cart' exact>
            <Cart cartItem = {cartItem} addToCart={addToCart}/>
          </Route>  
         </Switch>
     </Router> 
    </>
  );
}

export default App;
