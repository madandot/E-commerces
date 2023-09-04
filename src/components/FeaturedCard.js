import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import "./input.css";
import { Link } from "react-router-dom";

const FeaturedCard = ({ collection }) => {
   const [rating, setRating] = useState(null);
   const [hover, setHover] = useState(null);
   return (
      <div className='col'>
         <div className='product-card overflow-hidden relative bg-white shadow-sm shadow-slate-300 m-4 pb-8 rounded-md cursor-pointer'>
            <div className=' relative'>
               <img src='images/watch.jpg' alt='' />
               <div className=' absolute top-3 right-5'>
                  <GrFavorite size={20} className='' />
               </div>
            </div>
            <div className='px-4 py-4'>
               <h4 className='text-red-600 py-3'>{collection?.title}</h4>
               <h2 className='py-2 '>{collection?.desc}</h2>
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
               <p>{collection?.price}</p>
            </div>
            <div className='action-bar transition-all duration-500 absolute top-[10%] right-[-40px]'>
               <div className=' '>
                  <Link>
                     <img src='images/add-cart.svg' alt='addcart' className='p-2 mb-1 rounded  bg-yellow-400 ' />
                  </Link>
                  <Link>
                     <img src='images/view.svg' alt='view' className='p-2 mb-1 rounded bg-yellow-400 ' />
                  </Link>{" "}
                  <Link>
                     <img src='images/prodcompare.svg' alt='prodcompare' className='p-2 mb-1 rounded bg-yellow-400 ' />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeaturedCard;
