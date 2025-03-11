"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../utility/utils';

function Gallery() {
  return (
    <section 
    className='relative w-full h-[100vh] place-content-center overflow-hidden bg-neutral-950'
    >
      <h2 className='relative z-0 text-[20vw] font-black text-neutral-600 lg:text-[200px]'>
        <center>Gallery<span className='lg:text-[300px] text-[40vw] text-purple-600'>.</span></center>
      </h2>
      <ImageCards />
    </section>
  )
}

export default Gallery

const ImageCards = () => {
  useEffect(() => {
    console.log(galleryImages)

  }, []);
  const Constraintref = React.useRef(null);
  return(
    <div className='absolute inset-0 z-10' ref={Constraintref}>

      {
        galleryImages.map((img, idx) => {
             return( <ImageCard key={idx} Constraintref={Constraintref} src={img} alt={`img-${idx}`} top={Math.random()*600} left={Math.random()*900} rotate={Math.random()*10-idx}/>
            );
          })
      }
     
     

      
    </div>
  );
}

const ImageCard = ({Constraintref ,src,alt, top , left , rotate}) => {
  const [zIndex, setZIndex] = React.useState(0);
  const updateZIndex = () => {
    const els = document.querySelectorAll('.drag-element');
    let maxZIndex = -Infinity;
    els.forEach(el => {
      const z = parseInt(window.getComputedStyle(el).zIndex);
      if(z > maxZIndex) maxZIndex = z;
      if(!isNaN(zIndex) && zIndex >= maxZIndex ){
        maxZIndex = zIndex;
    }
    });
    setZIndex(maxZIndex + 1);
  }
  return(
    <motion.img
    onMouseDown={updateZIndex}
    
    style={{top, left, rotate, zIndex}}
    drag={true}
    dragConstraints={Constraintref}
    dragElastic={1.0}
    src={src} alt={alt}
    // dragMomentum={true}
    className=' drag-element absolute size-56 bg-neutral-200 p-1 pb-4 rotate-0 object-cover'/>

   
  );
}