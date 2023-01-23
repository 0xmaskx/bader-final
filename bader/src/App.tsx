import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Collaborater from './component/Collaborater';
import Home from './component/Home';
import Service from './component/Service';
import Contact from './component/Contact';
import Presentation from './component/Presentation';

function App() {

  return (
    <div className="flex flex-col h-full">
      <Home />
      <Presentation />
      <Service />
      <Collaborater />
      <Contact />
    </div>
  );
}

export default App;
