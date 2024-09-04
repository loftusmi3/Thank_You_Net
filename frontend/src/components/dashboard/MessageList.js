import MessagesListEntry from "./MessagesListEntry"


const MessagesList = ({messages}) => {
  
  return (
    <ol className="messagesList">
        {messages.map((message) => (
            <MessagesListEntry
                key = {message.id}
                text = {message.text}
            />
        ))}
    </ol>
  )}

export default MessagesList