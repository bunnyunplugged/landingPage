import { motion } from 'framer-motion';
import { FaPhone, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const handleCall = () => {
    window.location.href = 'tel:+918425836383'; // Replace with actual phone number
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/bunny_lm10', '_blank'); // Replace with actual Instagram profile
  };

  const handleEmail = () => {
    window.location.href = 'mailto:BUNNYLM20@GMAIL.COM'; // Replace with actual email
  };

  const handleBooking = () => {
    window.open('https://calendly.com/bunnylm20/30min', '_blank'); // Replace with actual Instagram profile
  };

  return (
    <footer className="section" style={{ backgroundColor: 'var(--secondary-bg)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem 1rem 3rem 1rem' }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-semibold mb-6"
        >
          📷 Book us for your next event! Let's make your celebration truly unforgettable.
        </motion.h2>
        

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
              margin: '1.5rem'
            }}
            onClick={handleBooking}
          >
            Book Now
          </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center space-between"
        >
          
            <FaPhone onClick={handleCall} size={28} style={{margin: '0 2rem'}} className="h-7 w-7 m-[4rem]" />

            <FaInstagram onClick={handleInstagram} size={36} style={{margin: '0 2rem'}} className="h-7 w-7 m-[4rem]" />
        
            <MdEmail onClick={handleEmail} size={32} style={{margin: '0 2rem'}} className="h-7 w-7 m-[4rem]" />

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 