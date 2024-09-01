import { useState, useEffect } from "react";

import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';

import DMsContent from "./DMsContent";
import SideBarHeader from "./SideBarHeader";
import Search from "./Search";

const USERS_URL = "/users"
const NEWCONVO_URL = "/users/new-convo"

const SideBar = () => {

  const [newDM, setNewDM] = useState(false);
  const [search, setSearch] = useState("");
  const [dMs, setDMs] = useState({});
  const { auth } = useAuth();
  const user = auth.user;
  const uid = auth.uid;
  const accessToken = auth.accessToken;

  useEffect( () => {
    const getUserInfo = async () => {
      const userInfo = await axios.get(USERS_URL + `/:${uid}`,
        {headers: {
          Authorization: 'Bearer ' + accessToken
      }});
      setDMs(userInfo.data.convos)
    }
    getUserInfo().catch(console.error);
  }, [uid])

  const HandleNewConvo = async (e) => {
    e.preventDefault()
    
    const response = axios.patch(NEWCONVO_URL, {req_user: user, searched_user: search},
      {headers: {
        Authorization: 'Bearer ' + accessToken
      }})
    if (response.ok) {
      setNewDM(false)
    }
    else {
      setSearch("userNotFound")
    }
  }

  return (
    <section className = "SideBar">
        <SideBarHeader newDM = {newDM} setNewDM = {setNewDM} />
        <>{
          newDM ? (<>
            <Search search = {search} setSearch = {setSearch} onSubmit = {HandleNewConvo}/>
            </>) : (<>
            <Search search = {search} setSearch = {setSearch}/>
            <DMsContent dMs = {dMs}/></>
          )
        }</>
    </section>
  )
}

export default SideBar