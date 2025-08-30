import { motion } from 'framer-motion'
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { outsetImg } from "../utils";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";
import ModelView from "./ModelView";
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const Hero = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: outsetImg,
  })

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if(size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2
      })
    }

    if(size ==='small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2
      })
    }
  }, [size])

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, []);

  return (
    <section className="py-20 md:min-h-screen bg-gradient-to-r from-[#430065] to-[#8700CB] flex xl:flex-row flex-col items-center justify-center lg:px-24 px-10 relative overflow-hidden">

      {/* Left Section - Texto */}
      <div className="z-40 xl:mb-0 mb-[20%] w-full xl:w-1/2 xl:pr-10 text-left flex flex-col items-center xl:items-start">

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
           className="text-sm md:text-base lg:text-lg font-semibold z-50 text-white self-start"
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
           className="text-5xl md:text-7xl lg:text-8xl font-bold z-50 mb-6 text-white self-start"
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
            onClick={() => {
              const projectSection = document.querySelector('#project-section');
              if (projectSection) {
                projectSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="bg-white h-10 w-32 rounded-full shadow-md hover:bg-gray-100 transition-colors mt-4 text-black font-semibold z-50 self-start cursor-pointer"
          >
            PROJETO
          </motion.button>

      </div>

      {/* Right Section - Celular 3D (oculto no mobile) */}
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
        <div className="absolute inset-0 flex justify-center overflow-hidden">
          <div className="w-full h-full relative overflow-hidden">
            {/* Model View Container */}
            <div className="w-full h-full overflow-hidden relative">
              <ModelView 
                index={1}
                groupRef={small}
                gsapType="view1"
                controlRef={cameraControlSmall}
                setRotationState={setSmallRotation}
                item={model}
                size={size}
              />  

              <ModelView 
                index={2}
                groupRef={large}
                gsapType="view2"
                controlRef={cameraControlLarge}
                setRotationState={setLargeRotation}
                item={model}
                size={size}
              />

              <Canvas
                className="w-full h-full"
                style={{
                  position: 'fixed',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  overflow: 'hidden'
                }}
                eventSource={document.getElementById('root')}
              >
                <View.Port />
              </Canvas>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;