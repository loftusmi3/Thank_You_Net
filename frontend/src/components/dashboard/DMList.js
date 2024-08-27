import DMListEntry from "./DMListEntry"


const DMList = ({DMs}) => {
  
  return (
    <ul>
        {DMs.map((DM) => (
            <DMListEntry
                key = {DM.id}
                username = {DM.username}
                lastMessage = {DM.lastMessage}
            />
        ))}
    </ul>
  )}

export default DMList