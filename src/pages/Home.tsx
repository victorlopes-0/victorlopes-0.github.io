import { useState } from 'react'
import { Link } from 'react-router-dom'
import TerminalIcon from '@mui/icons-material/Terminal'
import Navbar from '../components/Navbar'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <section id="center">
      <Navbar />
      <Link to="/about">
        <TerminalIcon />
      </Link>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </section>
  )
}

export default Home
