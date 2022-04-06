import React from 'react'

const Login = () => {
  return (
    <div className='container'>
     <form className='data'>
       <div>
       <label>USERNAME:</label>
       <input type="text" placeholder='ENTER USERNAME'></input>
       </div>
       <div>
       <label>PASSWORD:</label>
       <input type="text" placeholder='ENTER PASSWORD'></input>
       </div>
       <button type='submit'>Login</button>
       
     </form>
    </div>
  )
}

export default Login
