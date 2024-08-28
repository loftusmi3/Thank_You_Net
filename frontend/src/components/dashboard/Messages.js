import MessagesContent from "./MessagesContent"

const Message = () => {
  return (
    <section className = "Message">
        <MessagesContent Messages = {[{id: 0, text: "Thank you"},
                        {id: 1, text: "Your're welcome!"}]}/>
    </section>
  )
}

export default Message