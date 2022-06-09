export const User = (props) => {
  const {id, password, username} = props
  return(
    <>
    <div style={{width: '200px', margin: 'auto auto', background: 'red', textAlign: 'center', padding: '25px', borderRadius: '20px'}}>
      <div id='id'>your id is <span style={{color: 'yellow'}}>{id}</span></div>
      <div id='id'>your username is <span style={{color: 'yellow'}}>{username}</span></div>
      <div id='id'>your password is <span style={{color: 'yellow'}}>{password.slice(0, 4)+'****'}</span></div>
    </div>
    </>
  )
}