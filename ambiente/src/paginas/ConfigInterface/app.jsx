import "../../assets/styles/ConfigInterface.css"
import Header from "../../components/Header/Header.jsx";
import Botoes from "../../components/Botoes/Botoes.jsx";
import Footer from "../../components/Footer/Footer.jsx";

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
          <Footer />
        </main>
      </>
    )
  }
  