// import  { useContext } from 'react'
// import  { ShopContext } from '../../context/ShopContext'
// import { Link } from 'react-router-dom';

// const ProductItem = (id,name,image,price) => {
//     const {currency} = useContext(ShopContext);
//   return (
//     <>
//         <Link className='cursor-pointer text-gray-700' to={`/product/${id}`}>
//             <div className="overflow-hidden">
//                 <img src={image} alt="" />
//                 <p>{name}</p>
//                 <p>{currency} {price}</p>
//             </div>
//         </Link>
//     </>
//   )
// }

// export default ProductItem


import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <>
      <Link className="cursor-pointer text-gray-700" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img src={image} alt={name} />
          <p>{name}</p>
          <p>
            {currency} {price}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
