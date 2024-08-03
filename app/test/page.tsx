import React from 'react';
import NewTypingEffect from "@/components/HomePage/NewTypingEffect"
import PopUp from "@/components/Test/AleartPopUp"
import Sidebar from '@/components/Test/Sidebar';

function page() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>

      <div className='flex justify-center'>
        <NewTypingEffect/>
      </div>
    
    <div>
      <Sidebar/>
    </div>
    </div>
  )
}

export default page
