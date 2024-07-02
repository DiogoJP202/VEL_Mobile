import { MdOutlineEmail } from "react-icons/md";
import { Container } from "./recuperarsenha.ts";
import GlobalStyle from "../../components/globalStyles";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const enviaForm = (e) => {
    e.preventDefault();
    const email = document.querySelector("#IEmail");

    navigate("/codigoseguranca");
  };
  
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Roboto",
    backgroundColor: "#ECF3FB",
  }

  return (
    <Container style={style}>
      <GlobalStyle />
      <h1>Recuperar Senha</h1>
      <p>Um código será enviado para seu e-mail coloque-o abaixo.</p>
      <form onSubmit={enviaForm}>
        <div className="input">
          <label htmlFor="IEmail">
            <MdOutlineEmail />
          </label>
          <input
            type="email"
            autoComplete="on"
            name="Email"
            id="IEmail"
            placeholder="Digite seu E-mail"
            required
          />
        </div>
        <input type="submit" style={{cursor: "pointer"}} value="Enviar Código" />
      </form>
    </Container>
  );
}
