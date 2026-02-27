import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "./Contact.css";

import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const sociais = [
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+55 (89) 9 8139-7128",
    href: "https://wa.me/5589981397128?text=Olá! Gostaria de iniciar um projeto.",
    color: "#25d366",
    delay: "100",
  },
  {
    icon: <FaEnvelope />,
    label: "E-mail",
    value: "leonardojermano43@gmail.com",
    href: "mailto:leonardojermano43@gmail.com",
    color: "#ffcc00",
    delay: "200",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Leonardo-44",
    href: "https://github.com/Leonardo-44",
    color: "#dedada",
    delay: "300",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/leonardo-jermano-34651b38b/",
    href: "https://www.linkedin.com/in/leonardo-jermano-34651b38b/",
    color: "#0a66c2",
    delay: "400",
  },
];

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 50,
      easing: "ease",
    });
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { nome, mensagem } = form;
    const texto = `Olá! Me chamo *${nome}*. ${mensagem}`;
    window.open(
      `https://wa.me/5589981397128?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  }

  return (
    <section id="contato" className="container d-flex fd-column jc-center contato-section">
      {/* Glows decorativos — classes do App.css */}
      <div className="section-glow section-glow--left" />
      <div className="section-glow section-glow--right" />

      {/* Cabeçalho */}
      <div
        className="d-flex fd-column al-center txt-align contato-header"
        data-aos="fade-right"
        data-aos-delay="0"
      >
        <span className="contato-pill">📬 Vamos Conversar</span>
        <h1 className="color-primary">
          Entre em <span className="tertiary-color">Contato</span>
        </h1>
        <p className="color-secondary contato-sub">
          Tem um projeto em mente? Quer tirar uma dúvida ou só bater um papo?
          <br />
          Estou disponível pelos canais abaixo ou pelo formulário.
        </p>
      </div>

      {/* Corpo: cards sociais + formulário */}
      <div className="contato-body">

        {/* Cards de contato */}
        <div className="contato-sociais">
          {sociais.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="contato-card"
              data-aos="fade-right"
              data-aos-delay={s.delay}
            >
              <span className="contato-card-icon" style={{ color: s.color }}>
                {s.icon}
              </span>
              <div className="contato-card-info">
                <span className="contato-card-label">{s.label}</span>
                <span className="contato-card-value color-secondary">{s.value}</span>
              </div>
              <span className="contato-card-arrow">›</span>
            </a>
          ))}
        </div>

        {/* Divisor vertical */}
        <div className="contato-divider" data-aos="fade-up" data-aos-delay="200">
          <span className="contato-divider-line" />
          <span className="contato-divider-dot" />
          <span className="contato-divider-line" />
        </div>

        {/* Formulário */}
        <form
          className="contato-form"
          onSubmit={handleSubmit}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2 className="tertiary-color contato-form-title">Envie uma Mensagem</h2>

          <div className="contato-field">
            <label className="contato-label color-secondary" htmlFor="nome">
              Seu Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Como posso te chamar?"
              className="contato-input color-primary"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contato-field">
            <label className="contato-label color-secondary" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              className="contato-input color-primary"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contato-field">
            <label className="contato-label color-secondary" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              placeholder="Conte sobre o seu projeto ou dúvida..."
              className="contato-input contato-textarea color-primary"
              value={form.mensagem}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`button-one fw-bold contato-btn ${enviado ? "contato-btn--ok" : ""}`}
          >
            {enviado ? (
              "✓ Mensagem Enviada!"
            ) : (
              <>
                Enviar pelo WhatsApp <MdSend className="contato-btn-icon" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;