import DMsContent from "./DMsContent"
import SideBarHeader from "./SideBarHeader"
import Search from "./Search"

const SideBar = () => {

  return (
    <section className = "SideBar">
        <SideBarHeader />
        <Search />
        <DMsContent DMs = {[{id: 0, username: "test", lastMessage: "idk"},
                        {id: 1, username: "test2", lastMessage: "i still dk"}]}/>
    </section>
  )
}

export default SideBar