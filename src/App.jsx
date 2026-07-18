import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Gemini from './gemini_template/gemini.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/gemini" element={<Gemini />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
