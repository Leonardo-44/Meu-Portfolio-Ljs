import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "../AboutMe/AboutMe.css";

//ASSETS
import Personagem from "../../../public/Meupersonagem.png";
import Star from "../../assets/star.png";
import Perfil from "../../assets/perfil.png";
import Lampada from "../../assets/lampada.png";
import Experiencia from "../../assets/experience.png";

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em ms
      once: true, // Anima apenas um vez
      offset: 110, // Offset do trigger (em pixels)
      easing: "ease", // Suave (padrão)
    });
  }, []);

  return (
    <>
      <section className="container responsive">
        <h1
          className="d-flex jc-center al-center color-primary"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          Sobre Mim
        </h1>

        <div className="d-flex margin responsive">
          <img
            src={Personagem}
            width="500px"
            alt="Personagem LJS"
            className="img-responsive"
            data-aos="fade-right"
            data-aos-delay="0"
          />

          <div className="d-flex fd-column jc-center al-left gap-texts">
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="d-flex tamanho50 fd-column al-left gap">
                <div className="d-flex al-center jc-center gap">
                  <img
                    className="fundo-icon"
                    src={Perfil}
                    alt="PefilLogo"
                    width="40px"
                  />
                  <h2 className="tertiary-color tittle-about">Perfil</h2>
                </div>

                <p className="paragrafo fw-bold color-secondary">
                  Sou um desenvolvedor full-stack jovem, apaixonado por
                  tecnologia e movido pela curiosidade de entender como as
                  coisas funcionam do front-end ao back-end. Tenho experiência
                  em criar aplicações web escaláveis, e centradas no usuário,
                  combinando lógica de programação com atenção aos detalhes no
                  design.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="350">
              <div className="d-flex tamanho50 fd-column gap">
                <div className="d-flex al-center jc-center gap">
                  <img
                    className="fundo-icon"
                    src={Experiencia}
                    alt="PefilLogo"
                    width="40px"
                  />
                  <h2 className="tertiary-color tittle-about">Experiência</h2>
                </div>
                <p className="paragrafo fw-bold color-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis sequi modi consequuntur dignissimos doloremque,
                  laboriosam porro autem exercitationem inventore ut maiores
                  quas ipsa, ea laudantium, tempora quos minus. Id, excepturi?
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="450">
              <div className="d-flex al-left tamanho50 fd-column gap">
                <div className="d-flex al-center jc-center gap">
                  <img
                    className="fundo-icon"
                    src={Lampada}
                    alt="PefilLogo"
                    width="40px"
                  />
                  <h2 className="tertiary-color tittle-about">Diferenciais</h2>
                </div>
                <ul className="display-grid-gap responsive-cards">
                  <li
                    className="list-diferenciais color-primary al-center d-flex gap-diferenciais"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <img src={Star} alt="Estrela" width="27px" />
                    Versatilidade técnica
                  </li>
                  <li
                    className="list-diferenciais color-primary al-center d-flex gap-diferenciais"
                    data-aos="fade-left"
                    data-aos-delay="700"
                  >
                    <img src={Star} alt="Estrela" width="27px" />
                    Foco em resolver problemas reais
                  </li>
                  <li
                    className="list-diferenciais color-primary al-center d-flex gap-diferenciais"
                    data-aos="fade-left"
                    data-aos-delay="800"
                  >
                    <img src={Star} alt="Estrela" width="27px" />
                    Aprendizado contínuo
                  </li>
                  <li
                    className="list-diferenciais color-primary al-center d-flex gap-diferenciais"
                    data-aos="fade-left"
                    data-aos-delay="900"
                  >
                    <img src={Star} alt="Estrela" width="27px" />
                    Responsabilidade e comprometimento
                  </li>
                  <li
                    className="list-diferenciais color-primary al-center d-flex gap-diferenciais"
                    data-aos="fade-left"
                    data-aos-delay="1000"
                  >
                    <img src={Star} alt="Estrela" width="27px" />
                    Visão de produto
                  </li>
                  <li
                    className="list-diferenciais color-primary al-center d-flex gap-diferenciais"
                    data-aos="fade-left"
                    data-aos-delay="1100"
                  >
                    <img src={Star} alt="Estrela" width="27px" />
                    Ótima comunicação e trabalho em equipe
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
