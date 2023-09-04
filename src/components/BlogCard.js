import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
   return (
      <div>
         <div
            className='blog-card bg-white shadow-xl shadow-slate-600 m-4 pb-8 rounded-md cursor-pointer
          hover:shadow-xl hover:duration-500 hover:transition-all ease-in-out'
         >
            <div>
               <img src={data?.img} alt='one' />
            </div>
            <div className='px-4 py-2'>
               <p className='py-3'>{data?.date}</p>
               <h1 className='py-2 text-base font-bold'>{data?.name}</h1>
               <p className='text-base pb-8 opacity-[0.7]'>{data?.desc}</p>
               <Link className='bg-[#232f3e] text-white rounded-full py-2 px-4  uppercase' to='/'>
                  Read More
               </Link>
            </div>
         </div>
      </div>
   );
};

export default BlogCard;
