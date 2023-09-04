import React from "react";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle, AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillApple } from "react-icons/ai";
import { BsGooglePlay, BsArrowUpCircleFill } from "react-icons/bs";
import { LiaCcAmex } from "react-icons/lia";
import { BiLogoVisa, BiLogoMastercard } from "react-icons/bi";

function Footer() {
   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };
   return (
      <>
         <footer>
            <div className='bg-[#232f3e] md:flex justify-around items-center py-16 border-b-4 border-[#807f7f] '>
               <div className='flex items-center gap-x-4  md:text-3xl justify-center text-xl mb-4 md:mb-0 -ml-12 md:-ml-0'>
                  <div>
                     <img src='images/newsletter.png' alt='newsletter' />
                  </div>
                  <div className=' capitalize text-white cursor-pointer'>sign up for newsletter</div>
               </div>
               <div class='input-group md:mb-3 flex flex-col md:flex-row'>
                  <input
                     type='email'
                     className='form-control  md:p-[1rem] md:w-[600px] w-[300px] outline-none p-4 mx-8 md:mx-0 '
                     placeholder='Your email'
                     aria-label='Your email'
                     aria-describedby='basic-addon2'
                  />
                  <span
                     class='input-group-text md:bg-[#232f3e] md:text-white md:p-[1.19rem] bg-red-600  text-black rounded p-4 w-28 mx-24 my-4 md:mx-0 md:my-0 cursor-pointer text-center'
                     id='basic-addon2'
                  >
                     SUBSCRIBE
                  </span>
               </div>
            </div>
         </footer>

         <footer>
            <div className='bg-[#232f3e] text-white py-8 px-16  md:flex  justify-between  capitalize border-b-4 border-[#807f7f] '>
               <div className=''>
                  <div className='pb-6 text-2xl cursor-default '>
                     <h1>contact us</h1>
                  </div>
                  <div className='py-2'>
                     <p>demo store</p>
                     <p>no.123654 freedom park, Bangalore,1111</p>
                     <p>india</p>
                  </div>
                  <div className='py-2'>
                     <p>+91 9741572068</p>
                  </div>
                  <div className='py-2'>
                     <p>demo@exampledemo.com</p>
                  </div>
                  <div>
                     <div className='flex text-4xl  gap-x-2  '>
                        <Link className='' to=''>
                           <AiFillTwitterCircle />
                        </Link>
                        <Link className='' to=''>
                           <AiFillFacebook />
                        </Link>
                        <Link className='' to=''>
                           <AiOutlineInstagram />
                        </Link>
                        <Link className='pb-8 md:pb-0' to=''>
                           <AiFillYoutube />
                        </Link>
                     </div>
                  </div>
               </div>
               <div>
                  <div className='pb-6 text-2xl cursor-default'>
                     <h1>information</h1>
                  </div>
                  <div>
                     <ul className='flex flex-col gap-y-3'>
                        <Link className='' to=''>
                           privacy policy
                        </Link>
                        <Link className='' to=''>
                           Refund policy
                        </Link>
                        <Link className='' to=''>
                           shipping policy
                        </Link>
                        <Link className='' to=''>
                           terms of service
                        </Link>
                        <Link className='pb-8 md:pb-0' to=''>
                           blogs
                        </Link>
                     </ul>
                  </div>
               </div>
               <div>
                  <div className='pb-6 text-2xl cursor-default'>
                     <h1>account</h1>
                  </div>
                  <div>
                     <ul className='flex flex-col gap-y-3'>
                        <Link className='' to=''>
                           search
                        </Link>
                        <Link className='' to=''>
                           about us
                        </Link>
                        <Link className='' to=''>
                           faq
                        </Link>
                        <Link className='' to=''>
                           contact
                        </Link>
                        <Link className='pb-8 md:pb-0' to=''>
                           size chat
                        </Link>
                     </ul>
                  </div>
               </div>
               <div>
                  <div className='pb-6 text-2xl cursor-default'>
                     <h1>quick links</h1>
                  </div>
                  <div>
                     <ul className='flex flex-col gap-y-3'>
                        <Link className='' to=''>
                           accessories
                        </Link>
                        <Link className='' to=''>
                           laptops
                        </Link>
                        <Link className='' to=''>
                           headphones
                        </Link>
                        <Link className='' to=''>
                           smart watches
                        </Link>
                        <Link className='pb-8 md:pb-0' to=''>
                           tablets
                        </Link>
                     </ul>
                  </div>
               </div>
               <div>
                  <div className='pb-6 text-2xl cursor-default '>
                     <h1>our app</h1>
                  </div>
                  <div className='md:w-96 pt-8 pb-4'>
                     <p>download app and get extra 15% discount on your first order..!</p>
                  </div>
                  <div className='md:flex gap-x-2  '>
                     <div className='bg-white text-black flex py-2 px-3  mb-4 md:mb-0 items-center rounded '>
                        <Link className='' to='https://play.google.com/store/games?device=windows&pli=1' target='_blank'>
                           <BsGooglePlay className='text-3xl' />
                        </Link>
                        <div className='flex flex-col '>
                           <div>
                              <p>get it on</p>
                           </div>
                           <div className='text-xl'>
                              <h1>google play</h1>
                           </div>
                        </div>
                     </div>
                     <div className='bg-white text-black flex py-2 px-3   items-center rounded'>
                        <Link className='' to='https://www.apple.com/in/store' target='_blank'>
                           <AiFillApple className='text-5xl' />
                        </Link>
                        <div className='flex flex-col '>
                           <div>
                              <p>download on the</p>
                           </div>
                           <div className='text-xl'>
                              <h1>Apple store</h1>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         <footer>
            <div className='lg:flex relative items-center bg-[#232f3e] py-8 px-16 text-white '>
               <div>
                  <p className=''>&copy; 2023, lavish powered by shopify</p>
               </div>
               <div className='flex gap-x-2 absolute right-24  '>
                  <Link>
                     <BiLogoVisa className='text-3xl' />
                  </Link>
                  <Link>
                     <BiLogoMastercard className='text-3xl' />
                  </Link>
                  <Link>
                     <LiaCcAmex className='text-3xl' />
                  </Link>
               </div>
               <div className=' absolute md:right-4  '>
                  <Link to='#top'>
                     <BsArrowUpCircleFill className='  text-3xl' onClick={handleScrollToTop} />
                  </Link>
               </div>
            </div>
         </footer>
      </>
   );
}

export default Footer;
