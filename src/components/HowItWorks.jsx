import React, { useRef } from 'react';
import { chipImg, frameImg, frameVideo } from '../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRefs = [useRef(), useRef(), useRef()]; // 3 referências para 3 vídeos

  useGSAP(() => {
    // Animação do chip
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut',
    });

    // Animação do texto
    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut',
    });

    // Animação individual dos celulares
    videoRefs.forEach((ref, i) => {
      if (ref.current) {
        gsap.from(ref.current.parentNode, {
          scrollTrigger: {
            trigger: ref.current.parentNode,
            start: 'top 80%',
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: i * 0.2,
          ease: 'power2.out',
        });
      }
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        {/* Chip */}
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        {/* Título e subtítulo */}
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Vion
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* Três celulares */}
        <div className="mt-10 md:mt-20 mb-14 flex flex-col md:flex-row justify-center gap-6">
          {[0, 1, 2].map((_, index) => (
            <div
              key={index}
              className="relative h-[600px] w-[300px] flex justify-center items-center mx-auto md:mx-0"
            >
              {/* Vídeo “mascarado” dentro da tela do celular */}
              <div
                className="absolute top-[7%] left-[20%] h-[85%] w-[60%] overflow-hidden rounded-[30px] z-0"
              >
                <video
                  className="h-full w-full object-cover"
                  playsInline
                  preload="none"
                  muted
                  autoPlay
                  loop
                  ref={videoRefs[index]}
                >
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>

              {/* Frame do celular acima do vídeo */}
              <img
                src={frameImg}
                alt={`frame-${index}`}
                className="relative z-10 h-full w-auto"
              />
            </div>
          ))}
        </div>

        {/* Texto explicativo */}
        <div className="hiw-text-container flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white">best graphic performance by far</span>.
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile{' '}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
