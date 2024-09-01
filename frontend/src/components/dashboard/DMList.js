import DMListEntry from "./DMListEntry"


const DMList = ({dMs}) => {
  
  return (
    <ul>
        {dMs.map((dM) => (
            <DMListEntry
                key = {dM.id}
                username = {dM.username}
                lastMessage = {dM.lastMessage}
            />
        ))}
    </ul>
  )}

export default DMList