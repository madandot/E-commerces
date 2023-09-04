import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function Header() {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <div className=''>
            <header className='header-top-strip py-3 bg-[#131921] border-b-2 border-[#3b4149] md:block hidden '>
               <div className='container-xxl '>
                  <div className='row md:flex hidden justify-between items-center max-w-7xl w-[100%] mx-auto '>
                     <div className='col-6 capitalize '>
                        <p className=' text-white mb-0 '>Free shipping over & free returns</p>
                     </div>
                     <div className='col-6'>
                        <p className=' text-white mb-0'>
                           Hotline: <a href='tel:+91 9741572068'>+91 9741572068</a>
                        </p>
                     </div>
                  </div>
               </div>
            </header>
            <header className='header-upper py-3 bg-[#131921] '>
               <div className='container-xxl max-w-7xl md:w-[1200px] mx-auto '>
                  <div className='row flex justify-between items-center'>
                     <div className='col-2 flex justify-between items-center '>
                        <h1>
                           <Link className='text-white text-3xl tracking-widest mx-4 md:mx-0'>LAVISH</Link>
                        </h1>
                     </div>
                     <div className='col-5 flex  '>
                        <div className='input-group md:flex hidden justify-center items-center text-center'>
                           <input
                              type='text'
                              className='form-control w-[500px] h-10 pl-2 outline-none '
                              placeholder='Search Product Here...'
                              aria-label='Search Product Here...'
                           />
                           <span
                              className='input-group-text items-center text-center flex h-10 bg-[#febd69] p-2 text-2xl'
                              id='basic-addon2'
                           >
                              <BsSearch />
                           </span>
                        </div>
                     </div>
                     <div className='col-5 flex '>
                        <div className='header-upper-links md:flex hidden justify-center items-center gap-x-6 text-white '>
                           <div>
                              <Link className='flex justify-center items-center gap-x-2'>
                                 <img src='images/compare.svg' alt='compare' height={35} width={35} />
                                 <p>compare products</p>
                              </Link>
                           </div>
                           <div>
                              <Link className='flex justify-center items-center gap-x-2'>
                                 <img src='images/wishlist.svg' alt='wishlist' height={35} width={35} />
                                 <p>Favorite </p>
                              </Link>{" "}
                           </div>
                           <div>
                              <Link className='flex justify-center items-center gap-x-2'>
                                 <img src='images/user.svg' alt='user' width={35} height={35} />
                                 <p>Login</p>
                              </Link>{" "}
                           </div>
                           <div>
                              <Link className='flex justify-center items-center gap-x-2 '>
                                 <img src='images/cart.svg' alt='cart' width={35} height={35} />
                                 <div className='flex flex-col '>
                                    <span className='badge bg-white text-black text-center'>0</span>
                                    <p>$ 400</p>
                                 </div>
                              </Link>{" "}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <header className='header-bottom py-3 bg-[#232f3e] hidden md:block '>
               <div className='container-xxl lg:flex hidden'>
                  <div className='col-12  max-w-7xl w-[100%] mx-auto'>
                     <div className='menu-bottom flex '>
                        <div>
                           <div className='pr-10 relative '>
                              <button
                                 onClick={() => setIsOpen((prev) => !prev)}
                                 className='flex justify-center items-center gap-x-2 uppercase text-lg font-normal tracking-wider text-white'
                              >
                                 <img src='images/menu.svg' alt='' />
                                 Shop categories {!isOpen ? <AiOutlineCaretDown height={12} /> : <AiOutlineCaretUp height={12} />}
                              </button>
                              {isOpen && (
                                 <div className='bg-[#232f3e] ml-8 rounded-b-md absolute mt-3 text-white z-10'>
                                    <ul className='flex flex-col py-4 px-8 capitalize '>
                                       <Link to='' className='pb-1 mb-4 border-b-2 border-[#3b4149] hover:text-orange-300'>
                                          Home
                                       </Link>
                                       <Link to='' className='pb-1  mb-4 border-b-2 border-[#3b4149] hover:text-orange-300'>
                                          cameras & videos
                                       </Link>
                                       <Link to='' className='pb-1  mb-4 border-b-2 border-[#3b4149] hover:text-orange-300'>
                                          computers & Laptop
                                       </Link>
                                       <Link to='' className='pb-1  mb-4 border-b-2 border-[#3b4149] hover:text-orange-300'>
                                          Home Application
                                       </Link>
                                       <Link to='' className='pb-1  mb-4 border-b-2 border-[#3b4149] hover:text-orange-300'>
                                          handbag
                                       </Link>
                                       <Link to='' className='pb-1  mb-4 border-b-2 border-[#3b4149] hover:text-orange-300'>
                                          Mobiles & tablets
                                       </Link>
                                       <Link to='' className='pb-1  mb-4 border-b-2 border-[#3b4149] hover:text-orange-300'>
                                          Portable speakers
                                       </Link>
                                    </ul>
                                 </div>
                              )}
                           </div>
                        </div>
                        <div className='menu-links'>
                           <div className='flex gap-x-4 text-lg font-normal tracking-wider text-white uppercase'>
                              <NavLink to='/'>Home</NavLink>
                              <NavLink to='/'>Our Store</NavLink>
                              <NavLink to='/'>Blogs</NavLink>
                              <NavLink to='/contact'>Contact</NavLink>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
         </div>
      </>
   );
}

export default Header;
