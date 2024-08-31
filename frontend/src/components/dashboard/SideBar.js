import { useState } from "react";

import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';

import DMsContent from "./DMsContent";
import SideBarHeader from "./SideBarHeader";
import Search from "./Search";
import NewDM from "./NewDM";

const USERS_URL = "/users/new-convo"

const SideBar = () => {

  const [newDM, setNewDM] = useState(false);
  const [search, setSearch] = useState("");
  const { auth } = useAuth();
  const user = auth.user;
  const accessToken = auth.accessToken;

  const HandleNewConvo = async (e) => {
    e.preventDefault()
    
    const response = axios.patch(USERS_URL, {req_user: user, searched_user: search},
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
            {/* <NewDM search = {search} setSearch = {setSearch}/> */}
            </>) : (<>
            <Search search = {search} setSearch = {setSearch}/> {/* TO DO: Update with correct database */}
            <DMsContent DMs = {[{id: 0, username: "test", lastMessage: "idk"},
                          {id: 1, username: "test2", lastMessage: "i still dk"}]}/></>
          )
        }</>
    </section>
  )
}

export default SideBar