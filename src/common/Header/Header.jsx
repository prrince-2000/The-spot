import React from 'react';
import './header.css';
import Head from "./head";
import Navbar from "./Navbar";
import Search from './search';

const Header = ({cartItem}) => {
  return (
    <>
        <Head/>
        <Search cartItem = {cartItem}/>
        <Navbar/>
    </>
  )
}

export default Header;