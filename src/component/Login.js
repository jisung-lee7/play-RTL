import { useState } from 'react'

export default function Login() {
  const [isLogin, setIsLogin] = useState(false)

  function onClickHandler() {
    setIsLogin(!isLogin)
  }

  return (
    <button onClick={onClickHandler}>{isLogin ? 'Logout' : 'Login'}</button>
  )
}
