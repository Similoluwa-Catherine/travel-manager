import Avatar from "./avatar";
import Notification from "../assets/notification.svg";

const Topbar = () => {
  return (
    <div className="sticky top-0 z-40 flex items-center w-full border-b min-h-topbar max-h-topbar pr-xlarge pl-xlarge bg-grey-0 border-grey-20">
      <div className="flex flex-1 justify-end">
      <div className="flex items-center">
        <img src={Notification} alt="notification" className="mr-5" />
        <span className="mr-5 text-grey-70 text-xs font-bold">Kelin</span>
        <Avatar/>
      </div>
      </div>
    </div>
  );
};

export default Topbar;
