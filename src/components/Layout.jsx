import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../pages/Layout.css'

export default function Layout() {
  return (
    <div className="mainLayoutComponent">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
