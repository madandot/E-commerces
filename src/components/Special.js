import React, { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import "./input.css";

const Special = ({ products }) => {
   const [rating, setRating] = useState(null);
   const [hover, setHover] = useState(null);
   return (
      <div className='col  flex bg-slate-100 rounded-md p-4'>
         <div className='special'>
            <div className='special-image relative '>
               <img src={products?.image} alt='one' />
               <GrFavorite size={20} className=' absolute top-4 right-4 mb-2' />
               <div className='action-bar transition-all duration-500 absolute top-[10%]  hidden'>
                  <div className=' '>
                     <Link>
                        <FaShoppingBag size={25} className='mb-2 bg-yellow-300 p-[4px] rounded' />
                     </Link>
                     <Link>
                        <BiGitCompare size={25} className='mb-2 bg-yellow-300 p-[4px] rounded' />
                     </Link>
                     <Link>
                        <AiOutlineEye size={25} className='mb-2 bg-yellow-300 p-[4px] rounded' />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div className='py-4 px-4'>
               <p className=' text-orange-500 text-xl py-2'>{products?.name}</p>
               <p className=' font-semibold'>{products?.desc}</p>
               <p className='flex py-2'>
                  {[...Array(5)].map((star, index) => {
                     const currentRating = index + 1;
                     return (
                        <label>
                           <input type='radio' name='rating' value={currentRating} onClick={() => setRating(currentRating)} />
                           <FaStar
                              className='star cursor-pointer'
                              size={20}
                              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                              onMouseEnter={() => setHover(currentRating)}
                              onMouseLeave={() => setHover(null)}
                           />
                        </label>
                     );
                  })}
                  {rating}
               </p>
               <p className='py-3'>
                  {products?.price}
                  <span className='text-red-500 line-through pl-4'>{products?.discount}</span>
               </p>
               <div className='discount-till flex gap-4 items-center py-2'>
                  <p>
                     <b>5days</b>
                  </p>
                  <div className='flex  gap-4'>
                     <span className=' rounded-sm p-2 bg-red-500'>2</span>
                     <span className=' rounded-sm p-2 bg-red-500'>2</span>
                     <span className=' rounded-sm p-2 bg-red-500'>2</span>
                  </div>
               </div>
               <div>
                  <p className='text-base py-2 mb-3'>{products?.products}</p>
               </div>
               <Link
                  className='bg-[#232f3e] px-5 py-3 font-bold
                rounded-md text-white hover:bg-white shadow-xl shadow-slate-500 hover:text-black'
               >
                  Add to Cart
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Special;
