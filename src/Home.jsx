import React from 'react'
import MainSection from './components/MainSection'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'

function Home() {
  return (
  
  <div className="overflow-hidden relative flex bg-[#252525]">
         <SideNav />  
         <TopNav /> 
        <MainSection />
  </div>
  
  )
}

export default Home