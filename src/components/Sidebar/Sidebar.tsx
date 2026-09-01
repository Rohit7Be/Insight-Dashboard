import AccountToggle from "./AccountToggle"
import Plan from "./Plan"
import RouteSelect from "./RouteSelect"
import Search from "./Search"

const Sidebar = () => {
  return (
    <div>
      
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-40px-50px)] ">
        <AccountToggle/>
        <Search/>
        <RouteSelect/>
      </div>
      <div className="sticky top-[calc(100vh-40px-30px)]">
        <Plan/>
      </div>
    </div>
  )
}

export default Sidebar
