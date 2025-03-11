import React from 'react'
import LayoutLoad from './layoutLoad'
import dynamic from 'next/dynamic'

const Content = dynamic(() => import('./home'), {
  loading: () => <LayoutLoad />,
  ssr: false,
});

function Page() {
  return (
    <div className='xl:scale-105 xl:ml-20'>
        <Content/>
    </div>
  )
}

export default Page





