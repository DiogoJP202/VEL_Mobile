import Header from "../../components/Header/Header.jsx";
import Botoes from "../../components/Botoes/Botoes.jsx";
import Footer from "../../components/Footer/index.jsx";
import { LuPencil } from "react-icons/lu";
import GlobalStyle from "../../components/globalStyles";
import { Container } from "../ConfigInterfac/configuration.ts";
import { useNavigate } from "react-router-dom";

export default function AppPaginaConfiguracoes() {

  const navigate = useNavigate();

  const header = [
    {
      titulo: "Configurações",
      id: 1,
    },
  ];
  
  const style = {
    backgroundColor: "#ecf3fb",
    fontFamily: "Roboto",
    margin: "0",
  };

  return (
    <Container style={style}>
      <GlobalStyle />
      <main>
        {header.map((item) => (
          <Header key={item.id} titulo={item.titulo} />
        ))}
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
    </Container>
  );
}
