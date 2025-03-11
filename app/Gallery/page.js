import React from 'react'
import LayoutLoad from './LayoutLoad';
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('./gallery'), {
  loading: () => <LayoutLoad/>,
  ssr: false,
});

function Page() {
  return (
    <div>
      <Gallery/>
    </div>
  )
}

export default Gallery;