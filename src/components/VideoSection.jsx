import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const VideoSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={sectionRef}
      id="video"
      className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4 sm:p-6 lg:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nosso <span className="text-purple-800">vídeo</span>
          </h2>
        </motion.div>

        {/* Container do Vídeo */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Frame do YouTube */}
          <div className="relative w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/GxQbik6RCbA?rel=0&modestbranding=1&showinfo=0"
              title="Vion - App de Segurança Digital"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
