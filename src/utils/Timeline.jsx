import React from 'react'

export default function Timeline({when,what,where,status}) {
  return (
    <div>
        <main className='relative w-full h-full ml-6 pt-6 border-l-[1px] border-deepNaviBlue'>
            <div className='w-2 h-2 absolute -left-1 top-8 bg-deepNaviBlue rounded-full'></div>
            <div className='w-[78px] h-[1px] absolute -left-6 top-[35px] bg-deepNaviBlue'></div>

            <div className='ml-16'>
                <p>{when}</p>
                <div className='border-l-2 border-deepNaviBlue rounded-bl-xl'>
                  <h1 className='text-lg font-bold'>{what}</h1>
                </div>
                <p className='flex'>
                  <span className={`${where?'block':'hidden'} pr-1`}>@</span>
                  {where}
                </p>
                <p>{status}</p>
            </div>

        </main>
    </div>
  )
}
