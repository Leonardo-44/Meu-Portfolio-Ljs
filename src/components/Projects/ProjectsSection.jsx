import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "../Projects/ProjectsSection.css";
import ProjectCard from "../Projects/ProjectsCards";

import ArtesManuais from "../../assets/Projects/ArtesManuais.png";
import BlogResponsividade from "../../assets/Projects/BlogResponsividade.png";
import Essenza from "../../assets/Projects/Essenza.png";

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 50,
      easing: "ease",
    });
  }, []);

  const projects = [
    {
      title: "Landing Page Moderna",
      description:
        "Um espaço digital moderno que celebra o talento artesanal e conecta o público à beleza do feito à mão.",
      image: ArtesManuais,
      technologies: ["React", "CSS", "JavaScript"],
      link: "https://artes-manuais.vercel.app/",
      github: "https://github.com/Leonardo-44/landingPage-artesManuais",
    },
    {
      title: "Blog Responsivo",
      description:
        "Um blog criado para se ajustar perfeitamente a qualquer dispositivo, com foco em usabilidade e estética.",
      image: BlogResponsividade,
      technologies: ["HTML", "CSS"],
      link: "https://responsive-blog-project.netlify.app/",
      github: "https://github.com/Leonardo-44/Projeto-responsividade",
    },
    {
      title: "Loja de Perfumes",
      description:
        "Landing page elegante e responsiva para destacar produtos de perfumaria, com foco em usabilidade.",
      image: Essenza,
      technologies: ["HTML", "CSS"],
      link: "https://trabalho-escolar-ochre.vercel.app/",
      github: "https://github.com/Leonardo-44/Trabalho-Escolar",
    },
  ];

  return (
    <section id="projetos" className="projects-section d-flex fd-column al-center jc-center">
      {/* Glows decorativos — classes do App.css */}
      <div className="section-glow section-glow--left" />
      <div className="section-glow section-glow--right" />

      {/* Header */}
      <div
        className="projects-header d-flex fd-column al-center txt-align"
        data-aos="fade-right"
        data-aos-delay="0"
      >
        <span className="projects-pill">💻 Portfólio</span>
        <h1 className="color-primary">
          Meus <span className="tertiary-color">Projetos</span>
        </h1>
        <p className="color-secondary projects-sub">
          Uma seleção dos meus trabalhos mais recentes e impactantes.
        </p>
        <div className="projects-header-divider">
          <span className="projects-divider-line" />
          <span className="projects-divider-dot" />
          <span className="projects-divider-line" />
        </div>
      </div>

      {/* Grid de cards */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;