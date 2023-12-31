import Header from './components/Layout/Header';
import { Fragment, useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const {cartIsShown,setCartIsShown} = useState(false);
  
  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler =() =>{
    setCartIsShown(false);
  }
  return (
    <Fragment>
     {cartIsShown && <Cart/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
