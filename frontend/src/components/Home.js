import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import NetVis from "./NetVis"
import SideBar from "./SideBar"
import Messages from "./Messages"

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    return (
        <section>
            <NetVis></NetVis>
            <SideBar></SideBar>
            <Messages></Messages>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Home
