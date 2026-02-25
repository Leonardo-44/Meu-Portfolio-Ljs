import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../../App.css";
import "../Header/Header.css";
import Logo from "../../assets/Code.png";

function Header() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpenMenu(false); // fecha o menu ao clicar num item
    }
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="d-flex cabecalho bg-gradient jc-space-around al-center gap-header">
      {/* Lado esquerdo: logo + nome */}
      <div className="d-flex al-center gap">
        <img
          onClick={() => scrollTo("apresentacao")}
          width="40px"
          src={Logo}
          alt="Logo"
          className="bg-color logo pointer"
        />
        <h2 className="color-primary fw-bold">Leonardo Jermano</h2>
      </div>

      {/* Nav (desktop: inline | mobile: dropdown) */}
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
            onClick={() => scrollTo("contato")}
          >
            Contato
          </li>
        </ul>
      </nav>

      {/* Botão hamburguer — só aparece no mobile via CSS */}
      <button
        className="btn-mobile bg-color"
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Abrir menu"
        aria-expanded={openMenu}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Header;