import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import Gemini from './pages/Gemini/Gemini'
import Seo from './components/Seo'
import { profile } from './data/profile'
import './App.css'

function CentralSeo() {
  const location = useLocation()
  const { name, title, specialty, location: profLoc, summary, contact, seo, gemini } = profile

  const getSeoProps = (pathname) => {
    switch (pathname) {
      case '/':
        return {
          title: `${name} – General Surgery Resident in ${profLoc.city} | Aspiring Neurosurgeon`,
          description: `${name} is a junior resident in General Surgery in ${profLoc.city}, ${profLoc.country}, with a dedicated focus on neurosurgery. View career profile, achievements, and contact details.`,
          path: '/',
          schemaType: 'physician',
        }
      case '/about':
        return {
          title: `${name} – About | ${specialty} in ${profLoc.city}`,
          description: `Learn about ${name}, a ${specialty.toLowerCase()} in ${profLoc.city}. Career summary, medical education, hospital affiliations, and professional background.`,
          path: '/about',
          schemaType: 'physician',
        }
      case '/achievements':
        return {
          title: `${name} – Achievements & Awards | ${specialty}`,
          description: `Explore the professional achievements, awards, fellowships, and publications of ${name}, ${specialty.toLowerCase()} in ${profLoc.city}.`,
          path: '/achievements',
          keywords: [...seo.defaultKeywords, 'awards', 'fellowship', 'publications', 'certifications'].join(', '),
        }
      case '/contact':
        return {
          title: `Contact ${name} | ${specialty} in ${profLoc.city}`,
          description: `Contact ${name} at ${profLoc.clinic}, ${profLoc.city}. Phone: ${contact.phone}. Hospital duty hours and department address.`,
          path: '/contact',
          schemaType: 'business',
        }
      case '/gemini':
        return {
          title: `${name} – Celestial & Surgical Matrix | Gemini Profile`,
          description: gemini?.hero?.leadText || summary,
          path: '/gemini',
          schemaType: 'physician',
        }
      default:
        return {
          title: seo.siteName,
          description: summary,
          path: pathname,
        }
    }
  }

  const seoProps = getSeoProps(location.pathname)
  return <Seo {...seoProps} />
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <CentralSeo />
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
    </ThemeProvider>
  )
}

export default App

