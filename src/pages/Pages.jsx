import React from 'react'
import Home from '../components/mainpage/Home';
import FlashDeals from '../components/flashDeals/flashDeals';

const Pages = ({productItems, cartItem, addToCart}) => {
  return (
    <>
        <Home cartItem ={cartItem}/>
        <FlashDeals productItems={productItems} addToCart = {addToCart}/>
    </>
  )
}

export default Pages