import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  // URLs for each footer link (placeholder URLs - replace with actual URLs later)
  const linkUrls = {
    "Repositório do site": "https://github.com/marianaararipe/website-vion", // Replace with actual GitHub repo URL
    "Vídeo": "https://youtu.be/GxQbik6RCbA", // Replace with actual video URL
    "Figma": "https://www.figma.com/design/Jbgm1ifwh7qi16D9795VnK/Vion-%7C-Error-504?node-id=2001-501&t=6R9IGAyXVvrtssgC-1", // Replace with actual Figma URL
  };

  // Função para download do relatório PDF
  const handleReportDownload = () => {
    // Aqui você pode substituir pela URL real do seu PDF
    const pdfUrl = "/assets/Vion_Error504_DD2025.docx.pdf"; // Substitua pela URL real
    
    // Cria um link temporário para download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "Relatorio-Vion-Error504.pdf";
    link.target = "_blank";
    
    // Adiciona o link ao DOM, clica nele e remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
                {link === "Relatório" ? (
                  <button
                    onClick={handleReportDownload}
                    className="font-semibold text-gray text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </button>
                ) : (
                  <a 
                    href={linkUrls[link]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-gray text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {link}
                  </a>
                )}
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