import Activitygraph from "./Activitygraph"
import Grid from "./Grid"
import RecentTrasactions from "./RecentTrasactions"
import TopBar from "./TopBar"
import UsageRadar from "./UsageRadar"

const Dashboard = () => {
  return (
    <div className='bg-white rounded-lg h-[200vh] shadow pb-4'>
      <TopBar/>
      <Grid/>
      <div className=' mt-3 grid grid-cols-12 gap-3 px-3'>
        <Activitygraph/>
        <UsageRadar/>
        <RecentTrasactions/>
      </div>
      
    </div>
  )
}

export default Dashboard
