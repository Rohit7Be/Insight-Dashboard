import type { IconType } from "react-icons";
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from "react-icons/fi";

const RouteSelect = () => {
  return <div className="space-y-1 mr-1">
    <Route Icon={FiHome} Selected={true} title={"DashBoard"}/>
    <Route Icon={FiUsers} Selected={false} title={"Team"}/>
    <Route Icon={FiPaperclip} Selected={false} title={"Invoices"}/>
    <Route Icon={FiLink} Selected={false} title={"Integrations"}/>
    <Route Icon={FiDollarSign} Selected={false} title={"Finance"}/>
  </div>;
};

export default RouteSelect;

const Route = ({
  Selected,
  Icon,
  title,
}: {
  Selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return <button className={`flex items-center py-1.5 px-2 justify-start w-full gap-2 text-sm rounded-lg ${
    Selected ? "text-black bg-white shadow"
    : "hover:bg-stone-300 shadow-none text-stone-500 cursor-pointer rounded-lg"
  }`} >
    <Icon/>
    <span>{title}</span>
  </button>;
};
