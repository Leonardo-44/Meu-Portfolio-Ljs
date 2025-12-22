import "../../App.css";
import "../Presentation/Presentation.css";

//IMAGES
import LogoLJS from "../../../public/logoLJS.png";
import FacePlayer from "../../../public/personagemFace.png";

function Presentation() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="container reverse d-flex al-center jc-space-around">
        <div className="fd-column jc-center al-center">
          <h1 className="h1-apres tertiary-color">
            <span className="fw-bold">Leonardo</span> Jermano
          </h1>
          <h3 className="color-secondary">Desenvolvedor Full-Stack</h3>
          <p className="color-primary responsive-p">
            Como desenvolvedor full-stack, crio soluções digitais completas
            <br />
            da arquitetura do back-end à experiência do usuário <br />
            unindo performance, escalabilidade e design funcional <br />
            para transformar desafios em tecnologia de alto impacto.
          </p>

          <div className="buttons-margin gap-buttons d-flex">
            <button
              className="button-one fw-bold"
              onClick={() =>
                window.open(
                  "https://wa.me/5589981397128?text=Olá! Gostaria de iniciar um projeto.",
                  "_blank"
                )
              }
            >
              Iniciar Projetos
            </button>
            <button
              className="button-two fw-bold"
              onClick={() => scrollTo("projetos")}
            >
              Ver Projetos
            </button>
          </div>
        </div>

        <div className="img-apres d-flex jc-center al-center">
          <img
            src={FacePlayer}
            alt="Meu Rosto"
            width="315px"
            className="logo-center img-face"
          />
          <img
            src={LogoLJS}
            alt="Logo LJS"
            width="650px"
            className="img-logo"
          />
        </div>
      </section>
    </>
  );
}

export default Presentation;
