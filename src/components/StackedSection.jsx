import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StackItem = ({ image, title, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="h-screen w-full relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '0',
        padding: '2rem',
        filter: 'brightness(0.8)'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 
          className="text-6xl md:text-8xl text-white font-bold tracking-wider"
          style={{
            margin: 0,
            marginBlock: 0,
            marginBlockStart: 0,
            marginBlockEnd: 0
          }}
        >{title}</h2>
      </div>
    </motion.div>
  );
};

const StackedSection = () => {
  const items = [
    {
      image: new URL('../assets/images/IMG@4.png', import.meta.url).href,
      title: 'Private Parties, Campsites and Outdoor Events',
    },
    {
      image: new URL('../assets/images/IMG@1.png', import.meta.url).href,
      title: 'Clubs, Cafe, and Lounges',
    },
    {
      image: new URL('../assets/images/IMG@2.png', import.meta.url).href,
      title: 'Corporate Events, and Exclusive Celebrations',
    },
    {
      image: new URL('../assets/images/IMG@3.png', import.meta.url).href,
      title: 'Weddings',
    },
  ];

  return (
    <section className="w-full">
      {items.map((item, index) => (
        <StackItem key={index} {...item} index={index} />
      ))}
    </section>
  );
};

export default StackedSection; 