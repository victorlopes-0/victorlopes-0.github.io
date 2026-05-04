import { useState } from 'react'
import TerminalIcon from '@mui/icons-material/Terminal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <TerminalIcon />
        <button
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
