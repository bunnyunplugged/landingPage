import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TextSection from './TextSection';
const ImageCard = ({ src, alt, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ width: '100%', aspectRatio: '1/1' }}
      className="overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'scale-down' }}
        className="transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />
    </motion.div>
  );
};

const ImageGrid = () => {
  const images = [
    { src: '/src/assets/images/image1.jpg', alt: 'Image 1' },
    { src: '/src/assets/images/image2.jpg', alt: 'Image 2' },
    { src: '/src/assets/images/image3.jpg', alt: 'Image 3' },
    { src: '/src/assets/images/image4.jpg', alt: 'Image 4' },
    { src: '/src/assets/images/image5.jpg', alt: 'Image 5' },
    { src: '/src/assets/images/image6.jpg', alt: 'Image 6' },
  ];

  return (
    <section style={{ backgroundColor: 'var(--secondary-bg)', width: '100%', overflow: 'hidden', paddingBottom: '2rem' }} className="py-16">
      <TextSection
        title="Over 5 years of Professional Singing Experience"
        bgColor="var(--secondary-bg)"
      />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          width: '100%'
        }}>
          {images.map((image, index) => (
            <ImageCard key={index} {...image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGrid; 