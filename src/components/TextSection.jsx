import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextSection = ({ title, content, bgColor = 'var(--primary-bg)' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section" style={{ backgroundColor: bgColor, padding: '2rem 1rem', marginBottom: '0rem' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          {content}
        </p>
      </motion.div>
    </section>
  );
};

export default TextSection; 