import Footer from './footer'
import Header from './Header'
import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}