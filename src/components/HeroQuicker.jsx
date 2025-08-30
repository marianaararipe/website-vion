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
        className="absolute text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[18rem] 2xl:text-[20rem] font-extrabold tracking-widest select-none text-transparent"
        style={{
          WebkitTextStroke: '4px rgba(255, 255, 255, 0.4)',
          textStroke: '4px rgba(255, 255, 255, 0.4)'
        }}
      >
        VION
      </motion.h1>

      {/* Robô mais pra direita */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1 }}
        className="relative z-10
                   w-[320px] h-[320px] 
                   md:w-[480px] md:h-[480px] 
                   lg:w-[650px] lg:h-[650px] 
                   xl:w-[750px] xl:h-[750px] 
                  2xl:w-[850px] 2xl:h-[850px]
                   ml-12 lg:ml-32"   // <-- margens empurrando pra direita
      >
        <div className="absolute inset-0 flex items-center justify-center">
        <Spline scene="https://prod.spline.design/3Q14QOn-ubSf0vOS/scene.splinecode" />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroQuicker;
