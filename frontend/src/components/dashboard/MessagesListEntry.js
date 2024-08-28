
const MessagesListEntry = ({message}) => {
  return (
    <li className = "messageListEntry">
        <p>
          {message}
        </p>
    </li>
  )
}

export default MessagesListEntry