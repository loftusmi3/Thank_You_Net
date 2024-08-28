import MessageList from './MessageList'

const MessagesContent = ({messages}) => {
  

  // State does not change until after the function runs because
  // console.log was called in the original state
  // count does not change its value in this function call

  return (
    <>
      {messages.length ? (
        <MessageList
          messages={messages}  
        />
      ) : (
        <p style = {{marginTop: '2rem'}}>Your list is empty</p>
      )}
    </>
  )}

export default MessagesContent