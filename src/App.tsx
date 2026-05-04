import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import UnderConstruction from './pages/UnderConstruction'


const App = () => {
  const isLive = false;

  return (
    isLive ?
    (<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>) :
    <UnderConstruction/>
  )
}

export default App
