import React from "react";

import "../Projects/ProjectsSection.css";
import ProjectCard from "../Projects/ProjectsCards";

//assets
import ArtesManuais from "../../assets/Projects/ArtesManuais.png";
import BlogResponsividade from "../../assets/Projects/BlogResponsividade.png";
import Essenza from "../../assets/Projects/Essenza.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Landing Page Moderna",
      description:
        "Um espaço digital moderno que celebra o talento artesanal e conecta o público à beleza do feito à mão.",
      image: ArtesManuais,
      technologies: ["React", "Css", "JavaScript"],
      link: "https://artes-manuais.vercel.app/",
      github: "https://github.com/Leonardo-44/landingPage-artesManuais",
    },
    {
      title: "Blog Responsivo",
      description:
        "Um blog criado para se ajustar perfeitamente a qualquer dispositivo, com foco em usabilidade e estética.",
      image: BlogResponsividade,
      technologies: ["Html", "Css"],
      link: "https://responsive-blog-project.netlify.app/",
      github: "https://github.com/Leonardo-44/Projeto-responsividade",
    },
    {
      title: "Landing Page Loja de Perfumes",
      description:
        "Landing page elegante, moderna e responsiva para destacar produtos de perfumaria, com foco em usabilidade.",
      image: Essenza,
      technologies: ["Html", "Css"],
      link: "https://trabalho-escolar-ochre.vercel.app/",
      github: "https://github.com/Leonardo-44/Trabalho-Escolar",
    },
  ];

  return (
    <section className="d-flex fd-column al-center jc-center">
      <div className="projects-header" data-aos="fade-right" data-aos-delay="0">
        <h1 className="color-primary txt-center d-flex al-center jc-center">
          Meus Projetos
        </h1>
        <p className="color-secondary p-margin-bottom">
          Uma seleção dos meus trabalhos mais recentes e impactantes.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            data-aos="fade-down"
            data-aos-delay={index * 300}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
