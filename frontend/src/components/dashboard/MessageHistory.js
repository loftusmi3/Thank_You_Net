import MessagesContent from "./MessagesContent"

const MessageHistory = () => {
  return (
    <section className = "DM">
        <MessagesContent messages = {[{id: 0, text: "Thank you"},
                        {id: 1, text: "You're welcome!"}]}/>
    </section>
  )
}

export default MessageHistory