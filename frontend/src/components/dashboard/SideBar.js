import { useState } from "react";

import DMsContent from "./DMsContent";
import SideBarHeader from "./SideBarHeader";
import Search from "./Search";
import NewDM from "./NewDM";

const SideBar = () => {

  const [newDM, setNewDM] = useState(false);

  return (
    <section className = "SideBar">
        <SideBarHeader newDM = {newDM} setNewDM = {setNewDM} />
        <>{
          newDM ? 
            <NewDM />
             : (<>
            <Search />
            <DMsContent DMs = {[{id: 0, username: "test", lastMessage: "idk"},
                          {id: 1, username: "test2", lastMessage: "i still dk"}]}/></>
          )
        }</>
    </section>
  )
}

export default SideBar