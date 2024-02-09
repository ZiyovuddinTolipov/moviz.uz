import AllProducts from './components/AllProducts'
import Hero from './components/Hero'
import Navbar from './components/Navbar2'
import About from './components/About'
import Footer from './components/Footer'
export default function App() {
  return (
    <main className='bg-[#131b27] relative pt-3'>
      <Navbar />
      <Hero />
      <AllProducts />
      <About />
      <Footer />
    </main>
  )
}