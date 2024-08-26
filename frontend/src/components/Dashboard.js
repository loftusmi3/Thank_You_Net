import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

import NetVis from "./NetVis"
import SideBar from "./SideBar"
import DM from "./DM"

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
  await logout();
  navigate('/');
  }

  return (
    <section className = "Dashboard">
        <NetVis />
        <section className = "Messages">
          <SideBar />
          <DM />
        </section>
        <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
        </div>
    </section>
  )
}

export default Dashboard