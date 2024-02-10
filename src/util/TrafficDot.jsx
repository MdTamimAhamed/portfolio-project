import React from 'react'

function TrafficDot() {
  return (
    <div className='flex gap-1'>
        <div className='w-[.62rem] h-[.62rem] rounded-full bg-red'></div>
        <div className='w-[.62rem] h-[.62rem] rounded-full bg-orange'></div>
        <div className='w-[.62rem] h-[.62rem] rounded-full bg-primary'></div>
    </div>
  )
}

export default TrafficDot