import "../../assets/styles/ConfigInterface.css"
import Header from "../../components/Header/Header.jsx";
import Botoes from "../../components/Botoes/Botoes.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { LuPencil } from "react-icons/lu";


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
                <div className="Nome">
                    <h2>Nome</h2>
                    <p>Jeferson Souza Silva</p>
                </div>
                <div className="Email">
                    <h2>E-mail</h2>
                    <div className="Editar">
                        <p>jeferson.souza@gmail.com</p>
                        <LuPencil />
                    </div>
                </div>
                <div className="Senha">
                    <h2>Senha</h2>
                    <div className="Editar">
                        <p>jerferson123</p>
                        <LuPencil />
                    </div>
                </div>
                <div className="Telefone">
                    <h2>Telefone</h2>
                    <div className="Editar">
                        <p>(11) 97070-7070</p>
                        <LuPencil />
                    </div>
                </div>
                <div className="Bancaria">
                    <h2>Conta Bancária</h2>
                    <div className="Editar">
                        <p>123.456.789.123-9</p>
                        <LuPencil />
                    </div>
                </div>
                <div className="cpf">
                    <h2>CPF</h2>
                    <p>123.456.789-12</p>
                </div>
                <div className="cnh">
                    <h2>CNH</h2>
                    <p>01234567</p>
                </div>
            </div>
            <Footer />
            </main>
        </>
      )
    }