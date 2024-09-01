import DMList from './DMList'

const DMsContent = ({dMs}) => {
  

  // State does not change until after the function runs because
  // console.log was called in the original state
  // count does not change its value in this function call

  return (
    <>
      {dMs.length ? (
        <DMList
        dMs={dMs}  
        />
      ) : (
        <p style = {{marginTop: '2rem'}}>Your list is empty</p>
      )}
    </>
  )}

export default DMsContent