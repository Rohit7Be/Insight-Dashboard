import Activitygraph from "./Activitygraph"
import Grid from "./Grid"
import RecentTrasactions from "./RecentTrasactions"
import TopBar from "./TopBar"
import UsageRadar from "./UsageRadar"

const Dashboard = () => {
  return (
    <div className='min-w-0 rounded-lg bg-white pb-4 shadow'>
      <TopBar/>
      <Grid/>
      <div className='mt-3 grid grid-cols-1 gap-3 px-3 lg:grid-cols-12'>
        <Activitygraph/>
        <UsageRadar/>
        <RecentTrasactions/>
      </div>
      
    </div>
  )
}

export default Dashboard
