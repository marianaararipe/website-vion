import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline';

const HeroQuicker = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#660099] to-[#EB3C7D] flex items-center justify-center overflow-hidden">

      {/* Texto gigante de fundo */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold text-white/20 tracking-widest select-none"
      >
        VION
      </motion.h1>

      {/* Robô centralizado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1 }}
        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] z-10"
      >
        <Spline scene="https://prod.spline.design/h1dchiOP4xFjVre8/scene.splinecode" />
      </motion.div>
      
    </section>
  );
};

export default HeroQuicker;
