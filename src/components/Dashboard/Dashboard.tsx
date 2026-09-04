import Activitygraph from "./Activitygraph"
import Grid from "./Grid"
import RecentTrasactions from "./RecentTrasactions"
import TopBar from "./TopBar"
import UsageRadar from "./UsageRadar"

type DashboardProps = {
  isDark: boolean
  onToggleTheme: () => void
}

const Dashboard = ({ isDark, onToggleTheme }: DashboardProps) => {
  return (
    <div className='min-w-0 rounded-lg bg-(--bg-dash-color)  pb-4 shadow'>
      <TopBar isDark={isDark} onToggleTheme={onToggleTheme}/>
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
