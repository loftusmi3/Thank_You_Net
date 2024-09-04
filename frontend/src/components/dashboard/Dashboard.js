import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';

import NetVis from "./NetVis";
import SideBar from "./SideBar";
import MessageHistory from "./MessageHistory";

const Dashboard = () => {

  const USERS_URL = "/users"

  const [dMs, setDMs] = useState({});

  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
  await logout();
  navigate('/');
  }

  const { auth } = useAuth();
  const uid = auth.uid;
  const accessToken = auth.uid.accessToken;

  useEffect( () => {
    const getUserInfo = async () => {
      const userInfo = await axios.get(USERS_URL + `/:${uid}`,
        {headers: {
          Authorization: 'Bearer ' + accessToken
      }});
      console.log(userInfo)
      setDMs(userInfo.data.convos)
    }
    getUserInfo().catch(console.error);
  }, [uid, accessToken])

  return (
    <section className = "Dashboard">
       { <NetVis />}
        <section className = "Messages">
          <SideBar dMs = {dMs}/>
          <MessageHistory />
        </section>
        <div className="flexGrow">
          <button onClick={signOut}>Sign Out</button>
        </div>
    </section>
  )
}

export default Dashboard