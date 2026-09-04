import { FiCalendar } from 'react-icons/fi'

const TopBar = () => {
    const today = new Date()
    const hour = today.getHours()
    const currentDate = today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    const greeting = hour < 12
      ? "Good Morning 🌞"
      : hour < 18
        ? "Good Afternoon 🌤️"
        : "Good Evening 🌙"

  return (
    <div className='border-b pt-1.5 pb-4 px-4 mb-2 mt-2 border-stone-200'>
        <div className='flex flex-wrap items-center justify-between gap-3 p-0.5 '>
            <div>
            <span className='text-bold block text-xl'>{greeting} Rohit!</span>
            <span className='text-bold block text-xs text-stone-500'>{currentDate}</span>
            </div>
            <button className='flex items-center gap-2 bg-stone-300 px-3 py-2 hover:bg-stone-200 hover:text-violet-500 rounded-lg'>
                <FiCalendar/>
                <span>Prev 6 Months</span>
            </button>
        </div>
      
    </div>
  )
}

export default TopBar
