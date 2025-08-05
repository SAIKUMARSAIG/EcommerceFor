// // import React, { useContext, useEffect, useState } from "react";
// // import { products } from "../../assets/frontend_assets/assets";

// // import {ShopContext} from '../../context/ShopContext.jsx'
// // import ProductItem from '../../Components/Home components/ProductItem.jsx'

// // const LatestC = () => {
// //     const {products} = useContext(ShopContext);
// //     console.log(products);
// //     const [latestProducts, setLatestProducts] = useState([]);
// //     useEffect(()=>{
// //         setLatestProducts(products.slice(0,10));
// //     })
// //   return (
// //     <>
// //       <div className="flex flex-col text-center justify-center gap-5 items-center">
// //         <div className="flex gap-2 items-center">
// //             <h1 className="font-mono text-4xl text-center">
// //             <span className="text-slate-700">LATEST</span> COLLECTIONS
// //           </h1>
// //           <p className="w-20 h-[5px] rounded-full bg-slate-900"></p>
// //         </div>
// //         <div className="">
// //             <p className="text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
// //         </div>
// //       </div>
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
// //             {
// //                 latestProducts.map((item,index)=>{
// //                     <ProductItem key={index} id={item.id} image = {item.image} name = {item.name} price = {item.price}/>
// //                 })
// //             }
// //         </div>
// //     </>
// //   );
// // };

// // export default LatestC;

// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../../context/ShopContext.jsx";
// import ProductItem from "../../Components/Home components/ProductItem.jsx";
// import { Link } from "react-router-dom";

// const LatestC = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 12));
//   }, [products]); // Add 'products' as a dependency

//   return (
//     <>
//       <div className="flex flex-col text-center justify-center gap-5 items-center">
//         <div className="flex gap-2 items-center">
//           <h1 className="font-mono text-4xl text-center">
//             <span className="text-slate-700">LATEST</span> COLLECTIONS
//           </h1>
//           <p className="w-20 h-[5px] rounded-full bg-slate-900"></p>
//         </div>
//         <div>
//           <p className="text-gray-700">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the.
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
//         {latestProducts.map((item, index) => (
//           <Link to="/product/:item.id">
//             <ProductItem
//               key={index}
//               id={item.id}
//               image={item.image}
//               name={item.name}
//               price={item.price}
//             />
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default LatestC;

import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext.jsx";
import ProductItem from "../../Components/Home components/ProductItem.jsx";
import { Link } from "react-router-dom";

const LatestC = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 12)); // Update to show latest 12 products
  }, [products]); // Add 'products' as a dependency

  return (
    <>
      <div className="flex flex-col text-center justify-center gap-5 items-center">
        <div className="flex gap-2 items-center">
          <h1 className="font-mono text-4xl text-center">
            <span className="text-slate-700">LATEST</span> COLLECTIONS
          </h1>
          <p className="w-20 h-[5px] rounded-full bg-slate-900"></p>
        </div>
        <div>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {latestProducts.map((item, index) => (
          <Link key={index} to={`/productitem/${item._id}`}> {/* Dynamically generate URL with product ID */}
            <ProductItem
              id={item._id}   // Use the product's _id for identification
              image={item.image[0]}  // Assuming image is an array
              name={item.name}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default LatestC;
