import React , { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Burger from './Burger'

const App = () => {
  const [values , setValues] = useState ({
    targ : [{brand:"AK", price: 10},
    {brand:"BK", price: 20},
    {brand:"CK", price: 30},
    ]  
  });

 const setValueHandler = () => {
    setValues({
      targ : [{brand:"AK", price: 100},
    {brand:"BK", price: 200},
    {brand:"CK", price: 300},
    ]  
  });
  };
  return (
    <div className="App">
      <h1>Burger App</h1>
      <Burger brand = {values.targ[0].brand} price = {values.targ[0].price} />
      <Burger brand = {values.targ[1].brand} price = {values.targ[1].price}>And I Like It Very Much</Burger>
      <Burger brand = {values.targ[2].brand} price = {values.targ[2].price}/>
      <button onClick={setValueHandler}>CLICK</button>
    </div>
  );
}

export default App;
