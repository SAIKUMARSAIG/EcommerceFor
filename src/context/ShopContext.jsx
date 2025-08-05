// import React from 'react'
// import { products } from '../assets/frontend_assets/assets'
// import { createContext } from 'react'

// export const ShopContext = createContext();

// const   ShopContextProvider = (props)=>{

//     const currency = '$';
//     const delivery_fees=10;

//     const value = {
//         products,currency,delivery_fees
//     }

//     return(
//         <ShopContext.Provider value={value}>
//             {props.childern}
//         </ShopContext.Provider>
//     )

// }

// export default ShopContextProvider;




import  { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fees = 10;

  const value = {
    products,
    currency,
    delivery_fees   
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
