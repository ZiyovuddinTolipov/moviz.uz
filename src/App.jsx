import AllProducts from './components/AllProducts'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
export default function App() {
  return (
    <main className='bg-[#131b27]'>
      <Navbar />
      <Hero />
      <AllProducts />
      <About />
      <div className="lines">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </main>
  )
}