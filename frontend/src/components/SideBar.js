import Content from "./Content"

const SideBar = () => {

  return (
    <section className = "SideBar">
        <Content DMs = {[{id: 0, contact: "test"}]}/>
    </section>
  )
}

export default SideBar