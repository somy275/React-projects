// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLenis} from 'lenis/react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Grid from './Grid';
/* The following plugin is a Club GSAP perk */
const Smooth1 = () => {
  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll
  }) => {
    // called every scroll
    lenis.options.duration=1.7;
    lenis.options.smoothWheel = true;
  })
  gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.grid div').forEach(e=>{
      let tl=gsap.timeline();
      let xtransform=gsap.utils.random(-100,100);
      tl.set(e,{
        transformOrigin:`${xtransform<0 ? '100% 100%':'0% 100%'}`,    
        transformStyle:'preserve-3d',
        borderRadius:'50%',
        boxShadow:'5px 5px 20px rgba(0,0,0,0.6)',
        cursor:'pointer',
        xPercent:'100%',
      },"start")
      tl.to(e,{
        scale:0,
        ease: 'none',
      scrollBehavior:'smooth',
        scrollTrigger:{
          trigger:e,
          start:"top top",
          end:"bottom top",
          scrub: true,
        }
      },"start")
      tl.to(e,{
        xPercent:xtransform,
        ease: 'none',
        scrollBehavior:'smooth',
        scrollTrigger:{
          trigger:e,
          start:"top bottom",
          end:"bottom top",
          scrub:true
        }
      })
     
})
  return (
    <>
    <Grid/>
    </>
  )
}

export default Smooth1