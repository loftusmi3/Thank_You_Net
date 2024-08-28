import MessagesListEntry from "./MessagesListEntry"


const MessagesList = ({messages}) => {
  
  return (
    <ul>
        {messages.map((message) => (
            <MessagesListEntry
                key = {message.id}
                text = {message.text}
            />
        ))}
    </ul>
  )}

export default MessagesList