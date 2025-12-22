import { useState } from "react";
import { FaBars } from "react-icons/fa"; // IMPORTAÇÃO ADICIONADA
import "../../App.css";
import "../Header/Header.css";
import Logo from "../../assets/Code.png";

function Header() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="d-flex cabecalho bg-gradient jc-space-around al-center gap-header nav-mobile">
      <div className="d-flex al-center gap">
        <img
          onClick={() => scrollTo("apresentacao")}
          width="40px"
          src={Logo}
          alt="Logo"
          className="bg-color logo pointer"
        />
        <h2 className="color-primary fw-bold">Leonardo Jermano</h2>

        <button
          className="btn-mobile bg-color"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FaBars className="d-flex jc-center al-center" />
        </button>
      </div>

      <nav className={`nav-items ${openMenu ? "active" : ""}`}>
        <ul className="d-flex fw-bold gap">
          <li
            className="color-primary li-config pointer"
            onClick={() => scrollTo("about")}
          >
            Sobre
          </li>
          <li
            className="color-primary li-config pointer"
            onClick={() => scrollTo("tecnologias")}
          >
            Tecnologias
          </li>
          <li
            className="color-primary li-config pointer"
            onClick={() => scrollTo("projetos")}
          >
            Projetos
          </li>
          <li
            className="color-primary li-config pointer"
            onClick={() => scrollTo("formacao")}
          >
            Formação
          </li>
          <li
            className="color-primary li-config pointer"
            onClick={() => scrollTo("contato")}
          >
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
