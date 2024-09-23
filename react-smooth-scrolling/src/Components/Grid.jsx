// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom';
import ReactLenis from 'lenis/react';
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {TextPlugin} from 'gsap/TextPlugin';
const Grid = () => {
        gsap.registerPlugin(ScrollTrigger,TextPlugin);
    gsap.to(".text", {
      duration: 3,
      ease:'power1.inOut',
      text: {
        value: "Thomas Vance",
        padSpace:true
      },
     
    });
        
  return (
    <>
    <main>
    <div>
      <div className='w-screen grid grid-cols-8 grid-rows-[repeat(40,minmax(0,1fr))] overflow-hidden  relative cursor-pointer'>
        <div className=' a bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/6.56a5d53b.jpg)] w-[100%] h-auto bg-cover aspect-square row-[1] col-[4] contrast-[70%] bg-[50%] will-change-transform '></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/20.cae33766.jpg)] w-[100%] h-auto bg-cover aspect-square row-[1] col-[1] contrast-[70%] bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/2.07ca36b5.jpg)] w-[100%] h-auto bg-cover aspect-square row-[2] col-[8] contrast-[70%] bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/19.c66c7e95.jpg)] w-[100%] h-auto bg-cover aspect-square row-[2] col-[5] contrast-[70%] bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/3.f6f48295.jpg)] w-[100%] h-auto bg-cover aspect-square row-[3] col-[3] contrast-[70%]  bg-[50%] will-change-transform '></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/4.516b9c03.jpg)] w-[100%] h-auto bg-cover aspect-square row-[4] col-[7] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/5.95d97ae8.jpg)] w-[100%] h-auto bg-cover aspect-square row-[5] col-[8] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/1.1770e3b3.jpg)] w-[100%] h-auto bg-cover aspect-square row-[6] col-[2] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/7.87dc6e8b.jpg)] w-[100%] h-auto bg-cover aspect-square row-[7] col-[3] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/8.0bda5054.jpg)] w-[100%] h-auto bg-cover aspect-square row-[8] col-[7] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/9.27ccf354.jpg)] w-[100%] h-auto bg-cover aspect-square row-[9] col-[1] contrast-[70%] bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/10.f7990335.jpg)] w-[100%] h-auto bg-cover aspect-square row-[9] col-[6] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/11.ef4a18eb.jpg)] w-[100%] h-auto bg-cover aspect-square row-[10] col-[4] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/12.1c611c29.jpg)] w-[100%] h-auto bg-cover aspect-square row-[11] col-[2] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/13.20baef1e.jpg)] w-[100%] h-auto bg-cover aspect-square row-[12] col-[6] contrast-[70%] bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/14.73a4162c.jpg)] w-[100%] h-auto bg-cover aspect-square row-[13] col-[3] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/15.fdc25495.jpg)] w-[100%] h-auto bg-cover aspect-square row-[14] col-[5] contrast-[70%] bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/16.fce8daf8.jpg)] w-[100%] h-auto bg-cover aspect-square row-[15] col-[1] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/17.acd308fd.jpg)] w-[100%] h-auto bg-cover aspect-square row-[16] col-[2] contrast-[70%] bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/17.acd308fd.jpg)] w-[100%] h-auto bg-cover aspect-square row-[17] col-[8] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/18.ab0e512b.jpg)] w-[100%] h-auto bg-cover aspect-square row-[18] col-[3] contrast-[70%] bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/19.c66c7e95.jpg)] w-[100%] h-auto bg-cover aspect-square row-[19] col-[5] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/20.cae33766.jpg)] w-[100%] h-auto bg-cover aspect-square row-[20] col-[4] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/1.1770e3b3.jpg)] w-[100%] h-auto bg-cover aspect-square row-[21] col-[2] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/2.07ca36b5.jpg)] w-[100%] h-auto bg-cover aspect-square row-[22] col-[7] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/3.f6f48295.jpg)] w-[100%] h-auto bg-cover aspect-square row-[23] col-[1] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/4.516b9c03.jpg)] w-[100%] h-auto bg-cover aspect-square row-[24] col-[5] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/5.95d97ae8.jpg)] w-[100%] h-auto bg-cover aspect-square row-[25] col-[2] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/6.56a5d53b.jpg)] w-[100%] h-auto bg-cover aspect-square row-[26] col-[3] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/7.87dc6e8b.jpg)] w-[100%] h-auto bg-cover aspect-square row-[27] col-[6] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/9.27ccf354.jpg)] w-[100%] h-auto bg-cover aspect-square row-[28] col-[5] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/10.f7990335.jpg)] w-[100%] h-auto bg-cover aspect-square row-[29] col-[4] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/11.ef4a18eb.jpg)] w-[100%] h-auto bg-cover aspect-square row-[30] col-[1] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/12.1c611c29.jpg)] w-[100%] h-auto bg-cover aspect-square row-[31] col-[6] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/13.20baef1e.jpg)] w-[100%] h-auto bg-cover aspect-square row-[32] col-[3] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/14.73a4162c.jpg)] w-[100%] h-auto bg-cover aspect-square row-[33] col-[5] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/15.fdc25495.jpg)] w-[100%] h-auto bg-cover aspect-square row-[34] col-[8] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/16.fce8daf8.jpg)] w-[100%] h-auto bg-cover aspect-square row-[35] col-[6] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/17.acd308fd.jpg)] w-[100%] h-auto bg-cover aspect-square row-[36] col-[3] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/18.ab0e512b.jpg)] w-[100%] h-auto bg-cover aspect-square row-[37] col-[5] contrast-[70%]  bg-[50%] will-change-transform'></div>
        <div className='bg-[url(https://tympanus.net/Development/ScrollAnimationsGrid/19.c66c7e95.jpg)] w-[100%] h-auto bg-cover aspect-square row-[38] col-[4] contrast-[70%]  bg-[50%] will-change-transform'></div>
      </div>
      <div className='w-screen h-screen flex items-center justify-center flex-col fixed top-0 left-0  '>
        <div className='flex '>
        <h2 className='text text-[8vw] font-semibold font-[novecento-sans-wide,sans-serif] relative z-[10] inline'>
        </h2>
          <sup className='text1 text-[4vw] font-extrabold relative top-[4vw]'>®</sup>
          </div>
        <h3 className='text-[1.5rem] font-normal'>並外れたファッション</h3>
      </div>
      <div className='h-screen w-screen bg-[#c3bcbc] normal-case relative z-[50] leading-[1.2] text-[5vh] flex items-center justify-center'>
        <p className='max-w-[40ch] font-[novecento-sans-wide,sans-serif] px-[4vw] text-[0.9em]'>From the dawn of civilisation onwards crowds have always undergone the influence of illusions. It is to the creators of illusions that they have raised more temples, statues, and altars than to any other class of men. </p>
      </div>
    </div>
    <footer className='h-screen w-screen absolute flex items-end bottom-0 font-[sans-sarif] font-medium z-[50]'>
          <div className='flex justify-around w-[18em] fixed right-0 '>
          <div>More Demos:</div>
          <NavLink to="/" className={(e)=>{
return e.isActive?"border-[2px] border-solid border-[white] rounded-full h-[1.5em] w-[1.5em] text-center text-[black]":"inherit";
          }}>1</NavLink>

<NavLink to="/Smooth2" className={(e)=>{
return e.isActive?"border-[2px] border-solid border-[white] rounded-full h-[1.5em] w-[1.5em] text-center text-[#B41717]":"inherit";
          }}>2</NavLink>

<NavLink to="/Smooth3" className={(e)=>{
return e.isActive?"border-[2px] border-solid border-[white] rounded-full h-[1.5em] w-[1.5em] text-center text-[black]":"inherit";
          }}>3</NavLink>
</div>
</footer>
</main>
       
 <ReactLenis root>
   { /* content */}
 </ReactLenis>
 </>
  )
}

export default Grid