
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <main className='grid grid-cols-1 gap-4 p-3 sm:p-5 lg:grid-cols-[220px_minmax(0,1fr)]'>
      <Sidebar/>
      <Dashboard/>
    </main>
  )
}

export default App
