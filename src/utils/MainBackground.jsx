import React from 'react'

function MainBackground(){
  return (
    <>
        <div
          className="absolute inset-0 -z-50 h-screen md:max-h-screen w-full bg-background
          bg-[linear-gradient(to_right,#E5EEF5_1px,transparent_1px),linear-gradient(to_bottom,#E5EEF5_1px,transparent_1px)] 
          bg-[size:15px_15px] bg-center border-b-[1px] border-gridLine/5">
            
        </div>
    </>
  )
}

export default MainBackground