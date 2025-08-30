import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  // URLs for each footer link (placeholder URLs - replace with actual URLs later)
  const linkUrls = {
    "Repositório do site": "#", // Replace with actual GitHub repo URL
    "Vídeo": "#", // Replace with actual video URL
    "Relatório": "#", // Replace with actual report URL
    "Figma": "#", // Replace with actual Figma URL
  };

  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-sm">
            Acesse nosso repositório no GitHub, veja o protótipo no Figma ou confira o vídeo de apresentação. {' '}
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-sm">Error 504 @ 2025 | Vion - Desafio dos Dados.</p>
          <div className="flex items-center">
            {footerLinks.map((link, i) => (
              <React.Fragment key={link}>
                <a 
                  href={linkUrls[link]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link}
                </a>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 text-gray text-sm"> | </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer