import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

import NetVis from "../NetVis";
import SideBar from "./SideBar";
import MessageHistory from "./MessageHistory";

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
          <MessageHistory />
        </section>
        <div className="flexGrow">
          <button onClick={signOut}>Sign Out</button>
        </div>
    </section>
  )
}

export default Dashboard