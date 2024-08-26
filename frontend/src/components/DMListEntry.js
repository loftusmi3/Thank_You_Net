
const DMListEntry = ({key, contact}) => {
  return (
    <li className = "DMListEntry">
        <p>
          `${key}`
          <br />
          `${contact}`
        </p>
    </li>
  )
}

export default DMListEntry