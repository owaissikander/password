import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Eye, EyeOff } from 'lucide-react'

function App() {

  const [password, setPassword] = useState(true)

  const handleClick = () => {
    setPassword(!password)
  }
  return (
    <div className='flex border-red-900 mt-24 items-center  justify-center'>
      <input
        className='w-96 '
        placeholder='password'
        type={password ? "password" : 'text'}
      />
      <div className='-ml-10 cursor-pointer'>
        {
          password ? <Eye onClick={handleClick} /> : <EyeOff onClick={handleClick} />
        }

      </div>

    </div>
  )
}

export default App
