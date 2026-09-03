import React from 'react'
import { FiEye } from 'react-icons/fi'

const UsageRadar = () => {
  return (
    <div className='col-span-4 overflow-hidden rounded border border-stone-300'>
          <div className='p-4'>
            <h3 className='flex items-center gap-1 font-medium'>
                <FiEye/> Usage
            </h3>
          </div>
    </div>
  )
}

export default UsageRadar
