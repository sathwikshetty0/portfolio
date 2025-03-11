import React from 'react'
import Loader from './Loader'
import Transition from './transition'
function page() {
  return (
    <Transition>
    <div className=" text-9xl ">Loading</div>
    </Transition>
  )
}

export default page