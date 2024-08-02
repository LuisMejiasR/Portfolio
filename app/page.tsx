import { HeaderHome } from '@/components/ui/HeaderHome'
import { Navbar } from '@/components/ui/Navbar'

export default function Home() {
  return (
    <main className='main-container'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeaderHome />
      </div>
    </main>
  )
}
