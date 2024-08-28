import MessagesContent from "./MessagesContent"

const DM = () => {
  return (
    <section className = "DM">
        <MessagesContent DMs = {[{id: 0, text: "Thank you"},
                        {id: 1, text: "Your're welcome!"}]}/>
    </section>
  )
}

export default DM