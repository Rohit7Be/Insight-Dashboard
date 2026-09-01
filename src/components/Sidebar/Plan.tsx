import React from 'react'

const Plan = () => {
  return (
    <div className='flex sticky bottom-0 h-12 border-t px-2 border-stone-300 justify-end text-xs flex-col'>
      <div className='flex items-center justify-between'>
        <div>
            <p className='font-bold'>Enterprise</p>
            <p className='text-stone-500'>Pay as you go</p>
        </div>
        <button className='text-bold px-1.5 py-1.5 shadow hover:bg-stone-400 bg-stone-300 rounded-lg'>Support</button>
      </div>
    </div>
  )
}

export default Plan
