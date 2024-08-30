import { useState } from "react";

import axios from '../api/axios';

import DMsContent from "./DMsContent";
import SideBarHeader from "./SideBarHeader";
import Search from "./Search";
import NewDM from "./NewDM";

const SideBar = () => {

  const [newDM, setNewDM] = useState(false);
  const [search, setSearch] = useState("");

  const handleNewConvo = async (e) => {
    e.preventDefault()
    const response = axios.patch({user, search})
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
            <Search search = {search} setSearch = {setSearch} onSubmit = {handleNewConvo}/>
            {/* <NewDM search = {search} setSearch = {setSearch}/> */}
            </>) : (<>
            <Search database = {''}/> {/* TO DO: Update with correct database */}
            <DMsContent DMs = {[{id: 0, username: "test", lastMessage: "idk"},
                          {id: 1, username: "test2", lastMessage: "i still dk"}]}/></>
          )
        }</>
    </section>
  )
}

export default SideBar