// eslint-disable-next-line no-unused-vars
import React from 'react'
import Grid from './Grid'
import {gsap} from 'gsap'
import { useLenis } from 'lenis/react'
const Smooth3 = () => {
  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    lenis.options.duration=1.7;
    lenis.options.smoothWheel = true;
  })
    document.querySelectorAll('.grid div').forEach(e=>{
      let tl=gsap.timeline();
      tl.set(e,{
        transformOrigin:`50% 50%`,    
        transformStyle:'preserve-3d',
        boxShadow:'5px 5px 20px rgba(0,0,0,0.6)',
        filter:'brightness(100%)',
        rotate:'-30deg',
      },"start")
      tl.to(e,{
        scale:0.5,
        rotate:'30deg',
        ease: 'none',
        stagger:true,
        scrollBehavior:'smooth',
        scrollTrigger:{
          trigger:e,
          start:"top bottom",
          end:"bottom top",
          scrub: true,
        }
      })
    })
  return (
   <>
   <div className='bg-[#606C62] w-screen'>
   <Grid/>

   </div>
   </>
  )
}

export default Smooth3