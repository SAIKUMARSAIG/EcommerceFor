// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../../context/ShopContext'
// import ProductItem from './ProductItem';

// const BestSeller = () => {
//     const {products} = useContext(ShopContext);
//     const [bestSeller,setBestSeller] = useState([]);
//     useEffect(()=>{
//         const bestProduct = products.filter((item)=>(item.bestseller));
//         setBestSeller(bestProduct.slice(0,5));
//     },[]);
//   return (
//     <>
//         <div className="my-10">
//             <div className="text-center  py-8 text-gray-700">
//                 <h1 className='text-3xl'>Best Sellers</h1>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
//             </div>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//             {bestSeller.map((item,index)=>{
//                 <ProductItem key={index} id={item.id} name={item.name} image = {item.image} price={item.price} />
//             })}
//         </div>
//     </>
//   )
// }

// export default BestSeller
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]); // Include products in the dependency array if it can change dynamically

  return (
    <>
      <div className="my-10">
        <div className="text-center py-8 text-gray-700">
          <h1 className="text-3xl font-bold">Best Sellers</h1>
          <p className="text-sm text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default BestSeller;
