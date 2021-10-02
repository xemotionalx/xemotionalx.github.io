import Footer from './footer'
import Header from './Header'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  )
}