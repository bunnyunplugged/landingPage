import { lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Lazy load components
const HeroSection = lazy(() => import('./components/HeroSection'))
const TextSection = lazy(() => import('./components/TextSection'))
const VideoGrid = lazy(() => import('./components/VideoGrid'))
const StackedSection = lazy(() => import('./components/StackedSection'))
const ImageGrid = lazy(() => import('./components/ImageGrid'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const Loading = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-[#111828] p-0">
      <Suspense fallback={<Loading />}>
        <HeroSection />

        <TextSection
          title="📷 Professional Singer for 
Commercial and Private Events
500+ Live Performances Delivered 📷"
          content=" From soulful solo acts to energetic 4-piece band gigs, versatility is the hallmark of my craft."
          bgColor="var(--secondary-bg)"
        />

        <StackedSection />


        <VideoGrid />

        <TextSection
          title="Why Choose Us?"
        />

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mx-10" style={{ margin: '1rem 2rem',  }}>
          Proven track record with 500+ successful shows.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mx-10" style={{ margin: '1rem 2rem' }}>
          Expertise in performing across diverse genres for all types of audiences.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mx-10" style={{ margin: '1rem 2rem' }}>
          Professional approach to ensure client satisfaction and seamless event execution.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mx-10" style={{ margin: '1rem 2rem', marginBottom: '3rem' }}>
          Skilled team of musicians creating a perfect ambiance for every occasion.
        </p>

        <ImageGrid />

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mx-10" style={{ margin: '2rem 2rem',  }}>
        Whether you’re looking for a memorable musical experience for your wedding, a high-energy performance for a corporate event, or a melodious vibe for an intimate gathering, my music ensures a lasting impression.
        </p>

        <Footer />
      </Suspense>
    </div>
  )
}

export default App
