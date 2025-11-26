import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import UserProfile from '../src/components/UserProfile'
function App() {
  const [count, setCount] = useState(0)

  return (
<UserProfile />
  )
}

export default App
