import React from 'react'
import Home from '../components/mainpage/Home';
import FlashDeals from '../components/flashDeals/flashDeals';
import TopCate from '../components/top/TopCate';
import NewArrivals from '../components/New arrivals/NewArrivals';
import Discount from '../components/discount/Discount';
import Shop from '../components/Shop/Shop';
import Annu from '../components/Announcement/Annu';
import Wrapper from '../components/wrapper/Wrapper';

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
  return (
    <>
        <Home cartItem ={cartItem}/>
        <FlashDeals productItems={productItems} addToCart = {addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop shopItems={shopItems} addToCart = {addToCart}/>
        <Annu/>
        <Wrapper/>
    </>
  )
}

export default Pages