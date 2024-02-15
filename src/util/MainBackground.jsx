import React from 'react'

function MainBackground() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 h-screen w-full bg-background
        bg-[linear-gradient(to_right,#E5EEF5_1px,transparent_1px),linear-gradient(to_bottom,#E5EEF5_1px,transparent_1px)] 
        bg-[size:15px_15px]">
      </div>
    </>
  )
}

export default MainBackground