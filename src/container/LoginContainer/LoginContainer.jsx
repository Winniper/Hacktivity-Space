import { useEffect, useState } from "react"
import LoginView from "../../views/LoginView/LoginView"
import { auth } from "../../lib/config/FirestoreConfig"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const LoginContainer = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user){
        navigate("/home")
      }
    })
    return () => unsubsribe()
  },[navigate])

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }
  
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = async() => {
    try {
      await signInWithEmailAndPassword(auth, username, password)
      navigate("/home")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
        <LoginView username={username} password={password} handleUsername={handleUsername} handlePassword={handlePassword} onClick={handleLogin}/>
    </div>
  )
}

export default LoginContainer