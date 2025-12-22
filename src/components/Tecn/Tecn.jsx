import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "../Tecn/Tecn.css";

//ASSETS FRONT-END
import Html from "../../assets/HTML.png";
import Css from "../../assets/CSS.png";
import JavaScript from "../../assets/JAVASCRIPT.png";
import TypeScript from "../../assets/TYPESCRIPT.png";
import React from "../../assets/REACT.png";
import NextJs from "../../assets/NEXTJS.png";

//ASSETS BACK-END
import Java from "../../assets/JAVA.png";
import PostgreSQL from "../../assets/postgre.png";
import NodeJs from "../../assets/NODEJS.png";
import ExpressJs from "../../assets/EXPRESSJS.png";
import MongoDb from "../../assets/MONGODB.png";

//ASSETS OUTROS
import Git from "../../assets/git.png";
import Github from "../../assets/github-white-icon.png";
import PhotoShop from "../../assets/PHOTOSHOP.png";
import CorelDraw from "../../assets/CORELDRAW.png";

function Tecn() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Duração da animação em ms
      once: true, // Anima apenas um vez
      offset: 50, // Offset do trigger (em pixels)
      easing: "ease", // Suave (padrão)
    });
  }, []);
  return (
    <>
      <section className="container d-flex fd-column jc-center ">
        <h1
          className="color-primary al-center d-flex jc-center"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          Tecnologia Que Tenho Domínio
        </h1>

        <div className="d-flex jc-center al-items gap-cards alg-center">
          <article
            className="card d-flex fd-column al-items txt-align"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h2 className="tertiary-color tittle-cards">FRONT-END</h2>
            <ul className="al-center color-secondary d-flex fd-column jc-center gap-icons fw-bold">
              <li className="d-flex al-center gap-icons li-anime">
                <img src={Html} alt="Html LOGO" width="35px" />· HTML
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={Css} alt="Css LOGO" width="35px" />· CSS3
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={JavaScript} alt="JavaScript LOGO" width="35px" />·
                JavaScript
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={TypeScript} alt="TypeScript LOGO" width="35px" />·
                TypeScript
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={React} alt="React LOGO" width="35px" />· React
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={NextJs} alt="Next.Js LOGO" width="35px" />· Next.Js
              </li>
            </ul>
          </article>

          <article
            className="card d-flex fd-column al-items txt-align"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h2 className="tertiary-color tittle-cards">BACK-END</h2>
            <ul className="al-center color-secondary d-flex fd-column jc-center gap-icons fw-bold">
              <li className="d-flex al-center gap-icons li-anime">
                <img src={Java} alt="Java LOGO" width="35px" />· Java
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={PostgreSQL} alt="PostgreeSQL LOGO" width="35px" />·
                PostgreeSQL
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={NodeJs} alt="Node.Js LOGO" width="35px" />· Node.Js
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={ExpressJs} alt="Express.Js LOGO" width="35px" />·
                Express.Js
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={MongoDb} alt="MongoDb LOGO" width="35px" />· MongoDb
              </li>
            </ul>
          </article>

          <article
            className="card d-flex fd-column al-items txt-align"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h2 className="tertiary-color tittle-cards">OUTROS</h2>
            <ul className="al-center color-secondary d-flex fd-column jc-center gap-icons fw-bold">
              <li className="d-flex al-center gap-icons li-anime">
                <img src={Git} alt="Git LOGO" width="35px" />· Git
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={Github} alt="Github LOGO" width="35px" />· Github
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={PhotoShop} alt="PhotoShop LOGO" width="35px" />·
                PhotoShop
              </li>
              <li className="d-flex al-center gap-icons li-anime">
                <img src={CorelDraw} alt="CorelDraw LOGO" width="35px" />·
                CorelDraw
              </li>
            </ul>
          </article>
        </div>

        <div
          className="d-flex txt-center jc-center al-center fw-bold fd-column"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          <h3 className="color-primary">Pronto para Iniciar o seu Projeto?</h3>
          <button
            className="button-two fw-bold margin-btn"
            onClick={() =>
              window.open(
                "https://wa.me/5589981397128?text=Olá! Gostaria de iniciar um projeto.",
                "_blank"
              )
            }
          >
            Iniciar Projeto
          </button>
        </div>
      </section>
    </>
  );
}

export default Tecn;
