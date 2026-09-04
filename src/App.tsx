
import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <main className='grid grid-cols-1 gap-4 p-3 sm:p-5 lg:grid-cols-[220px_minmax(0,1fr)]'>
      <Sidebar/>
      <Dashboard isDark={isDark} onToggleTheme={() => setIsDark(!isDark)}/>
    </main>
  )
}

export default App
