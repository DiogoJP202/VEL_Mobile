import "../../assets/styles/ConfigInterface.css"
import Header from "../../components/Header/Header.jsx";
import Botoes from "../../components/Botoes/Botoes.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { GoBell } from "react-icons/go";
import { LuLogOut, LuMoon } from "react-icons/lu";
import { IoDocumentTextOutline, IoLanguage } from "react-icons/io5";
import { SlLock } from "react-icons/sl";
import { MdHelpOutline } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";


const header = [
  {
    titulo: 'Configurações'
  }
]

export default function AppPaginaConfiguracoes() {
    return (
      <>
        <main>
          {
              header.map((header) => {
                  return <Header titulo={header.titulo} />
              })
          }
          <Botoes />
          <div className="Quadro">
            <div className="Notificacoes">
              <div className="Icone-titulo">
                  <div className="Icone">
                      <GoBell />
                  </div>
                  <h2>Notificações</h2>
              </div>
              <div className="toggle-switch">
                  <input className="toggle-input" id="toggle2" type="checkbox" />
                  <label className="toggle-label" htmlFor="toggle2"></label>
              </div>
            </div>
            <div className="Modo-Escuro">
              <div className="Icone-titulo">
                  <div className="Icone">
                      <LuMoon />
                  </div>
                  <h2>Modo Escuro</h2>
              </div>
              <div className="toggle-switch">
                  <input className="toggle-input" id="toggle" type="checkbox" />
                  <label className="toggle-label" htmlFor="toggle"></label>
              </div>
            </div>
            <div className="Idioma">
                  <div className="Icone-titulo">
                  <div className="Icone"><IoLanguage /></div>
                      <h2>Idioma</h2>
                  </div>
            </div>
            <div className="Privacidade">
              <div className="Icone-titulo">
              <div className="Icone"><SlLock /></div>
                  <h2>Política de Privacidade</h2>
              </div>
            </div>
            <div className="Termos">
              <div className="Icone-titulo">
              <div className="Icone"><IoDocumentTextOutline /></div>
                  <h2>Termos de Uso</h2>
              </div>
            </div>
            <div className="Ajuda">
              <div className="Icone-titulo">
              <div className="Icone"><MdHelpOutline /></div>
                  <h2>Central de Ajuda</h2>
              </div>
            </div>
            <div className="Sobre">
              <div className="Icone-titulo">
              <div className="Icone"><IoMdInformationCircleOutline /></div>
                  <h2>Sobre</h2>
              </div>
            </div>
            <div className="Sair">           
              <div className="Icone-titulo">
              <div className="Icone"><LuLogOut /></div>
                  <h2>Sair</h2>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </>
    )
  }
  