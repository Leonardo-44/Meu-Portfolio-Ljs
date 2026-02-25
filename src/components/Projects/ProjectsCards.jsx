import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, image, technologies, link, github, index }) {
  return (
    <article
      className="card-projects"
      data-aos="fade-up"
      data-aos-delay={index * 150}
    >
      {/* Imagem com overlay */}
      <div className="card-projects-img-wrap">
        <img src={image} alt={title} className="project-image" />
        <div className="card-projects-img-overlay">
          <a href={link} target="_blank" rel="noreferrer" className="overlay-btn">
            <FaExternalLinkAlt /> Ver Projeto
          </a>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="card-projects-body">
        <h3 className="card-projects-title color-primary">{title}</h3>
        <p className="card-projects-desc color-secondary">{description}</p>

        {/* Tags de tecnologia */}
        <div className="project-technologies">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Botões */}
        <div className="project-links">
          <a href={link} target="_blank" rel="noreferrer" className="btn-project">
            <FaExternalLinkAlt /> Demo
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="btn-github">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;