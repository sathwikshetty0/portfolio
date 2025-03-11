// import React from 'react'
// import { createContext } from 'react';
// import Text from './text'
// import Zoop from './zoop'

// function Home() {
//   return (
//     <div>
//       {/* <Text text={"sanjan Athyady"}/> */}
//      <Zoop href={"https://www.google.com"}>Sathwik Shetty N</Zoop>
//       {/* <TextComp text={"sanjan Athyady"}/> */}
//     </div>
//   )
// }

// export default Home

import React from 'react';
import Text from './text';
import Zoop from './zoop';

function Home() {
  return (
    <div>
      {/* Uncomment if needed */}
      {/* <Text text="Sanjan Athyady" /> */}
      <Zoop href="https://www.google.com">Sathwik Shetty N</Zoop>
    </div>
  );
}

export default Home;
