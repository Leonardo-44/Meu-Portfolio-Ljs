import "../Projects/ProjectsSection.css";

const ProjectsCard = ({
  title,
  description,
  image,
  technologies,
  link,
  github,
  "data-aos": dataAos,
  "data-aos-delay": dataAosDelay,
  "data-aos-duration": dataAosDuration,
}) => {
  return (
    <div
      className="card-projects d-flex jc-center fd-column padding-card-projects"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      data-aos-duration={dataAosDuration}
    >
      {image && <img src={image} alt={title} className="project-image" />}
      <h3 className="h3-margin-16px tertiary-color">{title}</h3>
      <p className="color-secondary p-card-projects">{description}</p>
      {technologies && (
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="project-links">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-project"
          >
            Ver Projeto
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
