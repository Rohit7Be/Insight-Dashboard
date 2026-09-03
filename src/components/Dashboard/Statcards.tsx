import React from 'react'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

const Statcards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$120,054.24"
        pilltext="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Avg Order"
        value="$27.97"
        pilltext="1.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Trailing Year"
        value="$278,054.24"
        pilltext="60.75%"
        trend="up"
        period="Previous 365 days"
      />
       
    </>
  )
}

export default Statcards

const Card= ({
    title,
    value,
    pilltext,
    trend,
    period,
}:{
    title: string;
    value:string;
    pilltext: string;
    trend: "up" | "down";
    period: string;
})=>{
    return <div className='p-4 rounded border border-stone-400 col-span-4'>
        <div className='flex items-start justify-between mb-8'>
            <div>
                <h3 className='text-(--text-color-primary) text-sm mb-2'>
                    {title}
                </h3>
                <p className='text-3xl font-semibold'>{value}</p>
            </div>
            <span className={`text-xs px-2 py-2 rounded gap-1 flex items-center font-medium 
                ${
                    trend == "up" ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
                }`}>
                {trend== "up" ? <FiTrendingUp/> : <FiTrendingDown/>}
                {pilltext}
            </span>
        </div>
        <p className='text-(--text-color-primary) text-xs'>
            {period}
        </p>

    </div>
}