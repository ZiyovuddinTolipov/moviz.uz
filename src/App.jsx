import AllProducts from './components/AllProducts'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <main className='bg-[#1e293b]'>
      <Navbar />
      <Hero />
      <AllProducts />
    </main>
  )
}