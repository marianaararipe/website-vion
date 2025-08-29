import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="py-20 md:min-h-screen bg-gradient-to-r from-[#430065] to-[#8700CB] flex xl:flex-row flex-col items-start md:items-center justify-between lg:px-24 px-10 relative overflow-hidden">

      {/* Left Section - Robô */}
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 25,
          delay: 1.0,
          duration: 1.5
        }}
        className="hidden md:block w-full xl:w-1/2 h-[500px] md:h-[600px] lg:h-[800px] relative overflow-hidden"
      >
        <div className="absolute inset-0 flex justify-center xl:justify-start overflow-hidden">
          <div className="w-full h-full relative overflow-hidden">
            <Spline
              className="
                w-full h-full
                transform
                scale-70 sm:scale-75 md:scale-80 lg:scale-82 xl:scale-80 {/* <-- MUDANÇA 1: DIMINUÍ A ESCALA */}
                translate-x-0 sm:translate-x-0 md:translate-x-2 lg:translate-x-4 {/* <-- MUDANÇA 2: REMOVI O TRANSLATE-X PARA XL */}
                translate-y-0
              "
              scene="https://prod.spline.design/h1dchiOP4xFjVre8/scene.splinecode"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Section - Texto */}
      <div className="z-40 xl:mb-0 mb-[20%] w-full xl:w-1/2 xl:pl-10 text-left">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5
          }}
          className="text-sm md:text-base lg:text-lg font-semibold z-50 text-white"
        >
          ERROR 504 APRESENTA
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.6,
            duration: 1.5
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-50 mb-6 text-white"
        >
          Vion
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5
          }}
          className="text-lg md:text-base lg:text-xl text-white max-w-2xl z-50"
        >
          App com inteligência artificial que analisa seus roteadores, detecta falhas de segurança, garante conexões protegidas e ainda oferece um chatbot para tirar dúvidas e dar dicas práticas de segurança digital.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 2.0,
            duration: 1.5
          }}
          className="bg-white h-10 w-32 rounded-full shadow-md hover:bg-gray-100 transition-colors mt-4 text-black font-semibold z-50"
        >
          PROJETO
        </motion.button>

      </div>

    </section>
  );
};

export default Hero;