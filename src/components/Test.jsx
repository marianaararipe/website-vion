import React, { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";

const Model = () => {
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  const modelGroup = useRef();
  const cameraControl = useRef();

  // Animação de entrada do título
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5 }
    );
  }, []);

  // Configura rotação inicial para celular em pé e frente para a tela
  useEffect(() => {
    if (modelGroup.current) {
      // Ajuste de rotação: a frente do modelo deve ser a tela
      modelGroup.current.rotation.x = 0;       // vertical
      modelGroup.current.rotation.y = 0;       // frente (tela) para a câmera
      modelGroup.current.rotation.z = 0;
    }

    if (cameraControl.current && modelGroup.current) {
      // Posiciona a câmera centralizada na frente da tela
      cameraControl.current.position.set(0, 0, 5);
      cameraControl.current.lookAt(modelGroup.current.position);
    }
  }, []);

  return (
    <section className="common-padding  bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="screen-max-width flex flex-col items-center w-full">
        <h1 id="heading" className="section-heading text-white text-center mb-10">
          Take a closer look.
        </h1>

        <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative flex justify-center items-center">
          {/* Modelo 3D único, tela de frente para a câmera */}
          <ModelView
            index={1}
            groupRef={modelGroup}
            controlRef={cameraControl}
            item={model}
            size="small"
          />
        </div>

        <p className="text-sm font-light text-center text-white mt-5">
          {model.title}
        </p>
      </div>
    </section>
  );
};

export default Model;
