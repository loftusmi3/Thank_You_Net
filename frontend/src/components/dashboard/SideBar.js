import { useState } from "react";

import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';

import DMsContent from "./DMsContent";
import SideBarHeader from "./SideBarHeader";
import Search from "./Search";

const NEWCONVO_URL = "/users/new-convo"

const SideBar = ({dMs}) => {

  const [newDM, setNewDM] = useState(false);
  const [search, setSearch] = useState("");
  const { auth } = useAuth();
  const user = auth.user;
  const accessToken = auth.accessToken;

  

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