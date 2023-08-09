import { useCallback } from "react"
import { NavLink } from "react-router-dom"
import { Icon } from '@iconify/react';

const Sidebar = () => {
    const styles =
    "group py-3 my-4 flex text-grey-70 text-base font-semibold hover:bg-grey-10 items-center pl-4"
  const activeStyles = "text-yellow-60 is-active border-l-4 border-yellow-60"
  const classNameFn = useCallback(
    ({ isActive }) => (isActive ? `${styles} ${activeStyles}` : styles),
    []
  )
    
  return (
    <div className="h-screen overflow-y-auto border-r min-w-sidebar max-w-sidebar bg-gray-0 border-grey-20 py-base">
      <div className="h-full">
        <div className="flex justify-between px-12 py-7">
          <div className="flex items-center justify-center w-20 h-20 border border-yellow-60 border-solid rounded-circle text-xl">
            K
          </div>
        </div>
        <div>
        <NavLink className={classNameFn} to="/workspace">
          <span className="items-start"><Icon icon="carbon:workspace" width="20" height="20" /></span>
          <span className="ml-3 [.is-active]:text-grey-90">Workspace</span>
        </NavLink>
        <NavLink className={classNameFn} to="/clients">
          <span className="items-start"><Icon icon="fluent:people-team-24-filled" width="20" height="20" /></span>
          <span className="ml-3 [.is-active]:text-grey-90">Clients</span>
        </NavLink>
        <NavLink className={classNameFn} to="schedule-appointment">
          <span className="items-start"><Icon icon="grommet-icons:schedule-play" width="18" height="18" /></span>
          <span className="ml-3 [.is-active]:text-grey-90">Schedule Appointment</span>
        </NavLink>
        <NavLink className={classNameFn} to="/payment">
          <span className="items-start"><Icon icon="la:file-invoice-dollar" width="20" height="20" /></span>
          <span className="ml-3 [.is-active]:text-grey-90">Payment</span>
        </NavLink>
        <NavLink className={classNameFn} to="/task">
          <span className="items-start"><Icon icon="fluent:task-list-ltr-24-filled" width="20" height="20" /></span>
          <span className="ml-3 [.is-active]:text-grey-90">Task</span>
        </NavLink>
        <NavLink className={classNameFn} to="/message">
          <span className="items-start"><Icon icon="ant-design:message-outlined" width="20" height="20" /></span>
          <span className="ml-3 [.is-active]:text-grey-90">Message</span>
        </NavLink>
        <NavLink className={classNameFn} to="/reports">
          <span className="items-start"><Icon icon="carbon:report-data" width="20" height="20" /></span>
          <span className="ml-3 [.is-active]:text-grey-90">Reports</span>
          <span className="ml-20"><Icon icon="gridicons:dropdown" width="20" height="20" /></span>
        </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar