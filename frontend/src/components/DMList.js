import DMListEntry from "./DMListEntry"


const DMList = ({DMs}) => {
  return (
    <ul>
        {DMs.map((DM) => (
            <DMListEntry
                key = {DM.id}
                contact = {DM.contact}
            />
        ))}
    </ul>
  )}

export default DMList