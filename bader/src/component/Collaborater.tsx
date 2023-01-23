import { useState } from 'react'
import reactLogo from './assets/react.svg'

function Collaborater() {

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="flex flex-col gap-y-10 w-1/4 border-2 border-amber-900">
        <div className="flex flex-col h=1/5">Mon logo</div>
        <div className="flex flex-col h=4/5">Mon menu</div>
      </div>

      <div className="flex w-3/4 border-2 border-amber-900">yo</div>
    </div>  
  );
}

export default Collaborater;
