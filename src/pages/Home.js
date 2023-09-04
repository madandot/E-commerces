import React from "react";
import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BsGift, BsHeadset, BsCreditCard2BackFill } from "react-icons/bs";
import { GiPriceTag } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import FeaturedCard from "../components/FeaturedCard";
import Special from "../components/Special";
import Popular from "../components/Popular";

function Home() {
   const data = [
      {
         id: "1",
         img: "images/blog-1.jpg",
         date: "11 JUNE, 2023",
         name: "A Beautiful sunday morning renaissance",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto pariatur labore culpa eligendi fuga at....",
      },
      {
         id: "2",
         date: "11 JUNE, 2023",
         img: "images/blog-1.jpg",
         name: "Sed Ut Perspiciatis Unde Omnis..",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto pariatur labore culpa eligendi fuga at....",
      },
      {
         id: "3",
         date: "11 JUNE, 2023",
         img: "images/blog-1.jpg",
         name: "Vitae Magnis Fusce Laoreet porttitor",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto pariatur labore culpa eligendi fuga at....",
      },
      {
         id: "4",
         date: "11 JUNE, 2023",
         img: "images/blog-1.jpg",
         name: "Urna Pretium Elit Mauris Cursus Curabitu",
         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto pariatur labore culpa eligendi fuga at....",
      },
   ];
   const collection = [
      {
         id: "1",
         title: "Havells",
         desc: "Kids Headphones Bulk 10 Pack Multi Colored for...",
         price: "$100.00",
      },
      {
         id: "2",
         title: "Sony",
         desc: "Sony cameras are renowned for their exceptional... ",
         price: "$1000.00",
      },
      {
         id: "3",
         title: "samsung",
         desc: "Looks Better than Bulk 10 Pack Multi Colored for...",
         price: "$50.00",
      },
      {
         id: "4",
         title: "ipad",
         desc: "New collections Bulk 10 Pack Multi Colored for...",
         price: "$80.00",
      },
      {
         id: "5",
         title: "Nokia",
         desc: "Still it is a Strong Bulk 10 Pack Multi Colored for...",
         price: "$10.00",
      },
      // {
      //    id: "6",
      //    title: "Havells",
      //    desc: "Kids Headphones Bulk 10 Pack Multi Colored for...",
      //    price: "$100.00 ",
      // },
      // {
      //    id: "7",
      //    title: "Mac 15Pro",
      //    desc: "Kids Headphones Bulk 10 Pack Multi Colored for...",
      //    price: "$10000.00",
      // },
   ];
   const products = [
      {
         id: "1",
         image: "images/m2.jpg",
         name: "Samsung",
         desc: "Samsung Galaxy Note10+ Mobile Phone:Sim...",
         price: "$60.00",
         discount: "$70.00",
         products: "Products: 5",
      },
      {
         id: "2",
         image: "images/c1.jpg",
         name: "Sony",
         desc: "Best Camera To Click A Photo And Best Futures...",
         price: "$100.00",
         discount: "$170.00",
         products: "Products: 10",
      },
      {
         id: "3",
         image: "images/sp3.jpg",
         name: "Sony",
         desc: "Beoplay A1 Portable Bluetooth Speaker With...",
         price: "$10.00",
         discount: "$18.00",
         products: "Products: 15",
      },
      {
         id: "4",
         image: "images/tab3.jpg",
         name: "iPad ",
         desc: "iPad Pro 15 Tab With A Sim-T296 5G...",
         price: "$40.00",
         discount: "$55.00",
         products: "Products: 4",
      },
      {
         id: "5",
         image: "images/tv3.jpg",
         name: "LG",
         desc: "LG TVs are known for their cutting-edge technology...",
         price: "$200.00",
         discount: "$210.00",
         products: "Products: 15",
      },
      {
         id: "6",
         image: "images/catbanner-01.jpg",
         name: "Apple Mac",
         desc: "Mac's are seamless integration of hardware and software",
         price: "$55.00",
         discount: "$65.00",
         products: "Products: 8",
      },
   ];
   const Our = [
      {
         id: "1",
         image: "images/main-banner-1.jpg",
         name: "Oppo",
         title: "Kid Headphones Bulk 10 Pack Multi Colored For...",
         price: "$20.00",
      },
      {
         id: "2",
         name: "Longines",
         image: "images/main-banner-1.jpg",
         title: "Longines Watch Series 2-42Mm Stainiess Steel..",
         price: "$45.00",
      },
      {
         id: "3",
         name: "Rado",
         image: "images/main-banner-1.jpg",
         title: "Smart Watch With Advanced Health Monitoring Fitness...",
         price: "$30.00",
      },
      {
         id: "4",
         name: "Gucci",
         image: "images/main-banner-1.jpg",
         title: " its sleek design and exquisite  admiring glances... ",
         price: "$75.00",
      },
   ];
   return (
      <>
         <section className='home-wrapper-1 md:py-8 md:px-8 py-2 px-2'>
            <div className='container-xxl'>
               <div className='row md:flex md:justify-center md:items-center md:gap-x-2'>
                  <div className='col-6 '>
                     <div className='main-banner relative flex justify-center items-center '>
                        <div className=' mb-4 md:mb-0 '>
                           <img src='images/main-banner-1.jpg' alt='main banner' className='img-fluid rounded ' />
                           <div className='main-banner-content absolute  md:top-20 md:left-8 top-5 left-2'>
                              <h4 className='text-red-700 md:text-xl md:py-2 text-sm py-1'>SUPERCHARGED FOR PROS</h4>
                              <h5 className='md:text-5xl md:py-2 text-sm py-1 md:font-extrabold'>iPad S13+ Pro.</h5>
                              <p className='w-60 md:py-2 md:mb-8 mb-4 '>From $999.00 or $41.62/mo for 24 mo Footnote*</p>
                              <Link className='bg-[#232f3e] rounded-full text-white md:px-8 md:py-4 px-4 py-2 hover:bg-orange-100 hover:text-black '>
                                 BUY NOW
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-6 md:grid md:grid-cols-2 md:gap-8'>
                     <div className='relative mb-4 md:mb-0'>
                        <img src='images/catbanner-01.jpg' alt='main banner' className='img-fluid rounded' />
                        <div className='main-banner-content absolute top-10 left-5 '>
                           <h4 className='text-red-600'>BEST SALE</h4>
                           <h5 className='md:text-2xl md:py-2 text-sm py-1 font-extrabold'>Laptops Max</h5>
                           <p className='w-60 md:py-2 md:mb-8 mb-4 '>From $599.00 or $21.62/mo for 24 mo Footnote*</p>
                        </div>
                     </div>
                     <div className=' relative  mb-4 md:mb-0'>
                        <img src='images/catbanner-03.jpg' alt='main banner' className='img-fluid rounded' />
                        <div className='main-banner-content absolute top-10 left-5 '>
                           <h4 className='text-red-600'>NEW ARRIVAL</h4>
                           <h5 className='md:text-2xl md:py-2 text-sm py-1 font-extrabold'>Buy IPad Air</h5>
                           <p className='w-60 md:py-2 md:mb-8 mb-4 '>From $599.00 or $21.62/mo for 24 mo Footnote*</p>
                        </div>
                     </div>

                     <div className=' relative  mb-4 md:mb-0'>
                        <img src='images/catbanner-02.jpg' alt='main banner' className='img-fluid rounded' />
                        <div className='main-banner-content absolute top-10 left-5 '>
                           <h4 className='text-red-600'>15% OFF</h4>
                           <h5 className='md:text-2xl md:py-2 text-sm py-1 font-extrabold'>Smartwatch</h5>
                           <p className=' md:py-2 md:mb-8 mb-4'>
                              Shop the latest <br /> band styles and colors
                           </p>
                        </div>
                     </div>
                     <div className=' relative  mb-4 md:mb-0'>
                        <img src='images/catbanner-04.jpg' alt='main banner' className='img-fluid rounded' />
                        <div className='main-banner-content absolute top-10 left-5 '>
                           <h4 className='text-red-600'>FREE ENGRAVING</h4>
                           <h5 className='md:text-2xl md:py-2 text-sm py-1 font-extrabold'>AirPods Max</h5>
                           <p className='w-60 md:py-2 md:mb-8 mb-4 '>
                              High-fidelity playback& <br /> ultra-low distortion
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className='home-wrapper-2 cursor-pointer'>
            <div className='container-xxl'>
               <div className='row'>
                  <div className='col-12'>
                     <div className='services bg-[#f7f7f9] md:flex md:justify-between items-center md:mx-20 mx-4 my-4 shadow-lg shadow-black-100 rounded-md p-4'>
                        <div className='flex'>
                           <div className='flex justify-center items-center'>
                              <LiaShippingFastSolid className='text-4xl mr-4' />
                           </div>
                           <div>
                              <h4 className='pb-2 text-xl font-normal'>Free Shipping</h4>
                              <p className=' opacity-[0.7] pb-4 md:pb-0'>From orders over $100</p>
                           </div>
                        </div>
                        <div className='flex'>
                           <div className='flex justify-center items-center'>
                              <BsGift className='text-4xl mr-4 ' />
                           </div>
                           <div>
                              <h4 className='pb-2 text-xl font-normal'>Daily Surprise Offers</h4>
                              <p className=' opacity-[0.7] pb-4 md:pb-0'>Save up to 25% off</p>
                           </div>
                        </div>
                        <div className='flex'>
                           <div className='flex justify-center items-center'>
                              <BsHeadset className='text-4xl mr-4' />
                           </div>
                           <div>
                              <h4 className='pb-2 text-xl font-normal'>Support 24/7</h4>
                              <p className=' opacity-[0.7] pb-4 md:pb-0'>Shop with an expert</p>
                           </div>
                        </div>
                        <div className='flex'>
                           <div className='flex justify-center items-center'>
                              <GiPriceTag className='text-4xl mr-4' />
                           </div>
                           <div>
                              <h4 className='pb-2 text-xl font-normal'>Affordable Prices</h4>
                              <p className=' opacity-[0.7] pb-4 md:pb-0'>Get Factory Direct Price</p>
                           </div>
                        </div>
                        <div className='flex'>
                           <div className='flex justify-center items-center'>
                              <BsCreditCard2BackFill className='text-4xl mr-4' />
                           </div>
                           <div>
                              <h4 className='pb-2 text-xl font-normal'>Secure Payments</h4>
                              <p className=' opacity-[0.7] pb-4 md:pb-0'>100% protect payments</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className='home-wrapper-3'>
            <div className='container-xxl'>
               <div className='categories grid grid-cols-2 md:grid-cols-6 gap-y-8 md:mx-20 mx-4 md:my-4 bg-[#f5f5f9] py-8 shadow-lg shadow-black-200'>
                  <div className='px-4 '>
                     <h1 className='text-base font-semibold'>Computers & Laptops</h1>
                     <Link className=' text-blue-300' to='#'>
                        10 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/laptop.jpg' alt='' />
                  </div>
                  <div className='px-4'>
                     <h1 className='text-base font-semibold'>Cameras</h1>
                     <Link className=' text-blue-300' to='#'>
                        10 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/camera.jpg' alt='' />
                  </div>
                  <div className='px-4'>
                     <h1 className='text-base font-semibold'>Smart Television</h1>
                     <Link className=' text-blue-300' to='#'>
                        10 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/tv.jpg' alt='' />
                  </div>{" "}
                  <div className='px-4'>
                     <h1 className='text-base font-semibold'>Smart Watches</h1>
                     <Link className=' text-blue-300' to='#'>
                        8 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/watch.jpg' alt='' width={120} />
                  </div>{" "}
                  <div className='px-4'>
                     <h1 className='text-base font-semibold'>Mobiles & tablets</h1>
                     <Link className=' text-blue-300' to='#'>
                        10 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/catbanner-03.jpg' alt='' width={110} height={110} />
                  </div>{" "}
                  <div className='px-4'>
                     <h1 className='text-base font-semibold'>HeadPhones</h1>
                     <Link className=' text-blue-300' to='#'>
                        10 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/headphone.jpg' alt='' />
                  </div>{" "}
                  <div className='px-4'>
                     <h1 className='text-base font-semibold'>Accessories</h1>
                     <Link className=' text-blue-300' to='#'>
                        10 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/acc.jpg' alt='' />
                  </div>{" "}
                  <div className='px-4'>
                     <h1 className='text-base font-semibold'>Portable Speakers</h1>
                     <Link className=' text-blue-300' to='#'>
                        10 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/speaker.jpg' alt='' />
                  </div>
                  <div className='px-4'>
                     <h1 className='text-base font-semibold'>Music & Gaming</h1>
                     <Link className=' text-blue-300' to='#'>
                        10 Items
                     </Link>
                  </div>
                  <div>
                     <img src='images/game.jpg' alt='' height={90} width={110} />
                  </div>{" "}
               </div>
            </div>
         </section>
         <section className='special-wrapper'>
            <div className='container-xxl'>
               <div className='row mx-20 text-2xl font-medium py-3'>
                  <h1 className='section-heading'> Special Products</h1>
               </div>
               <div className='md:grid md:grid-cols-3 md:gap-8 md:justify-between items-center md:mx-20 '>
                  {products.map((p, i) => {
                     return <Special products={p} key={p.id} />;
                  })}
               </div>
            </div>
         </section>
         <section className='our-popular-products'>
            <div className='md:mx-20 text-xl font-semibold pt-8 md:px-6 mx-4'>
               <h3>Our Popular Products</h3>
            </div>
            <div className='md:flex gap-4 '>
               <div className='md:flex md:ml-20 mx-8 md:mx-0  gap-4'>
                  <div className='bg-white shadow-xl shadow-slate-300  px-4 py-2 rounded w-[300px]'>
                     <div className='popular-watchs flex  items-center py-2 '>
                        <img src='images/catbanner-02.jpg' alt='' className=' rounded-sm' />
                        <Link>
                           <h1 className='pl-2 capitalize text-lg hover:font-medium'>smart watch</h1>
                        </Link>
                     </div>
                     <div className='popular-watchs flex  items-center py-2 '>
                        <img src='images/sp2.jpg' alt='' className=' rounded-sm' />
                        <Link>
                           <h1 className='pl-2 capitalize text-lg hover:font-medium'>Speaker</h1>
                        </Link>
                     </div>
                     <div className='popular-watchs flex  items-center py-2 '>
                        <img src='images/laptop.jpg' alt='' className=' rounded-sm' />
                        <Link>
                           <h1 className='pl-2 capitalize text-lg hover:font-medium'>smart watch</h1>
                        </Link>
                     </div>
                  </div>
                  <div className=' relative rounded shadow-xl shadow-slate-300 w-[300px] '>
                     <div className='tv'>
                        <img src='images/tv3.jpg' alt='' className='rounded' />
                     </div>
                     <div className=' absolute top-12 left-5 '>
                        <p className=' text-lg font-extrabold text-white py-2'>15% OFF</p>
                        <h1 className='text-lg font-extrabold text-white py-1'>Home Speakers</h1>
                        <p className='text-base font-semibold text-white py-1'>
                           Form $399 or $16.62/mo <br /> for 24mo.*
                        </p>
                     </div>
                  </div>
               </div>
               <div className='md:flex gap-x-4 items-center  py-8 '>
                  <div className='popular-products md:flex'>
                     {Our.map((O, i) => {
                        return <Popular Our={O} key={O.id} />;
                     })}
                  </div>
               </div>
            </div>
         </section>
         <section className='featured collection'>
            <div className='md:mx-20 text-xl font-semibold pt-8 md:px-6 mx-4 '>
               <h3>Featured Collection</h3>
            </div>
            <div className='blog-wrapper md:flex  md:justify-between items-center  md:mx-20 mb-4 '>
               {collection.map((c, i) => {
                  return <FeaturedCard collection={c} key={c.id} />;
               })}
            </div>
         </section>
         <section className='marque-wrapper'>
            <div className='container-xxl'>
               <div className='marquee  bg-[#f5f5f7] shadow-xl shadow-black-300 p-4 md:mx-20 md:my-4 mx-2 my-1'>
                  <Marquee>
                     <div className='mr-12'>
                        <img src='images/brand-01.png' alt='brand' />
                     </div>
                     <div className='mr-12'>
                        <img src='images/brand-02.png' alt='brand' />
                     </div>
                     <div className='mr-12'>
                        <img src='images/brand-03.png' alt='brand' />
                     </div>
                     <div className='mr-12'>
                        <img src='images/brand-04.png' alt='brand' />
                     </div>
                     <div className='mr-12'>
                        <img src='images/brand-05.png' alt='brand' />
                     </div>
                     <div className='mr-12'>
                        <img src='images/brand-06.png' alt='brand' />
                     </div>
                     <div className='mr-12'>
                        <img src='images/brand-07.png' alt='brand' />
                     </div>
                     <div className='mr-12'>
                        <img src='images/brand-08.png' alt='brand' />
                     </div>
                  </Marquee>
               </div>
            </div>
         </section>
         <section className='blogCards'>
            <div className='md:mx-20 text-xl font-semibold pt-8 md:px-6 mx-4 '>
               <h3>Our Latest Blogs</h3>
            </div>
            <div className='blog-wrapper md:flex  md:justify-between items-center  md:mx-20 mb-4 '>
               {data.map((d, i) => {
                  return <BlogCard data={d} key={d.id} />;
               })}
            </div>
         </section>
      </>
   );
}

export default Home;
