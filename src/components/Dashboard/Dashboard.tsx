import Grid from "./Grid"
import TopBar from "./TopBar"

const Dashboard = () => {
  return (
    <div className='bg-white rounded-lg h-[200vh] shadow pb-4'>
      <TopBar/>
      <Grid/>
    </div>
  )
}

export default Dashboard
