// eslint-disable-next-line no-unused-vars
import React from 'react'
import Grid from './Grid'
import {gsap} from 'gsap'
import { useLenis } from 'lenis/react'
const Smooth2 = () => {
  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
    lenis.options.duration=1.7;
    lenis.options.smoothWheel = true;
  })
    document.querySelectorAll('.grid div').forEach(e=>{
      let tl=gsap.timeline();
      let xtransform=gsap.utils.random(-100,100);
      tl.set(e,{
        transformOrigin:`${xtransform<0 ? '200% 200%':'0% 200%'}`,    
        transformStyle:'preserve-3d',
        borderRadius:'0%',
        boxShadow:'5px 5px 20px rgba(0,0,0,0.6)',
        filter:'brightness(100%)',
      },"start")
      tl.to(e,{
        scale:0.5,
        borderRadius:'70%',
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
    <div className='bg-[#000000] text-[#B41717] w-screen'>
    <Grid/>
    </div>
    
    </>
  )
}

export default Smooth2