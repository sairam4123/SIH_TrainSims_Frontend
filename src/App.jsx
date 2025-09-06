import { useState } from 'react'

import './App.css'
import Searchtable from './Components/Searchtable'
import Navbar from './Components/Navbar'
import Bottomdiv from './Components/Bottomdiv'
import Sidebar from './Components/Sidebar'
function App() {

  return (
    
    <div className="min-h-screen bg-[#e5e7eb] text-white">
    <Navbar/>
    <Sidebar/>
     <Searchtable/>
     <Bottomdiv/>
</div>
  )
}

export default App
