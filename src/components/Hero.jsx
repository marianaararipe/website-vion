import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#430065] to-[#8700CB] flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%] w-full xl:w-1/2 xl:pr-10">

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
          className="text-sm md:text-base lg:text-lg font-semibold z-10 
          text-white"
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 text-white"
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
          className="text-lg md:text-base lg:text-xl text-white max-w-2xl"
        >
          App com inteligência artificial que analisa seus roteadores, detecta falhas de segurança, garante conexões protegidas e ainda oferece um chatbot para tirar dúvidas e dar dicas práticas de segurança digital.
        </motion.p>

        <button className="bg-white h-10 w-32 rounded-full shadow-md hover:bg-gray-100 transition-colors mt-4 text-black font-semibold">
          PROJETO
        </button>

      </div>

      {/* Right Section */}
      <div className="w-full xl:w-1/2 h-[500px] md:h-[600px] lg:h-[800px] xl:translate-x-20">
        <Spline scene="https://prod.spline.design/h1dchiOP4xFjVre8/scene.splinecode" />
      </div>

    </section>
  );
};

export default Hero;
