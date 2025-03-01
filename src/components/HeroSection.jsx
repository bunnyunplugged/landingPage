import { motion } from 'framer-motion';
import bgImage from '../assets/images/herosection.jpg';

const HeroSection = () => {
  
  const handleBooking = () => {
    window.open('https://calendly.com/bunnylm20/30min', '_blank'); // Replace with actual Instagram profile
  };

  return (
    <section className="h-screen w-full">
      <div
        className="h-screen w-full"
        style={{
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#0a0a1a', // Dark blue/purple background as fallback
          position: 'relative',
        }}
      >
        {/* Overlay with dots pattern */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="flex flex-col items-center justify-center text-white z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold mb-10 leading-none"
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: '3rem',
              fontWeight: '900',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Bunny's Unplugged
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-widest mb-3">
              SOULFUL MUSIC
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-widest">
              LIVE & UNPLUGGED
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#111828] text-white px-16 py-5 text-2xl sm:text-3xl md:text-4xl hover:bg-[#1c2539] transition-colors rounded-sm"
            style={{
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              backgroundColor: '#111828',
              color: '#ffffff',
              border: 'none',
              borderRadius: '0.2rem',
              padding: '0.5rem',
              fontSize: '1rem',
            }}
            onClick={handleBooking}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 