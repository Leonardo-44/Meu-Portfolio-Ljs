import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Tecn from "./components/Tecn/Tecn";
import Presentation from "./components/Presentation/Presentation";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectsSection from "./components/Projects/ProjectsSection";

function App() {
  return (
    <>
      <div>
      <Header />
      <section id="apresentacao">
        <Presentation />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="tecnologias">
        <Tecn/>
      </section>
      <section id="projetos">
        <ProjectsSection/>
      </section>
      <section id="formacao">
        {/* Coloque seu componente de Formação */}
      </section>
      <section id="contato">
        {/* COMPONENTE DE CONTATO */}
      </section>
      <Footer />
    </div>
    </>
  );
}

export default App;

