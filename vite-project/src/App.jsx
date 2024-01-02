import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Bottom from './components/Bottom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Work from './pages/work/Work'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='work' element={<Work />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Bottom />
    </BrowserRouter>
  )
}

export default App
