
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <main className='grid gap-4 p-5 grid-cols-[220px_1fr]'>
      <Sidebar/>
      <Dashboard/>
    </main>
  )
}

export default App
