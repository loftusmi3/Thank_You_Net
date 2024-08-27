
const DMListEntry = ({username, lastMessage}) => {
  return (
    <li className = "DMListEntry">
        <p>
          {username}
          <br />
          {lastMessage}
        </p>
    </li>
  )
}

export default DMListEntry