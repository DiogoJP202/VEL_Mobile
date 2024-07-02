import CodeInput from "../../components/CodeInputs";
import { Container } from "./codigoSeguranca.ts";
import GlobalStyle from "../../components/globalStyles";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const enviaForm = (e) => {
    e.preventDefault();
    const email = document.querySelector("#IEmail");

    navigate("/");
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Roboto",
    backgroundColor: "#ECF3FB",
  };

  return (
    <Container style={style}>
      <GlobalStyle />
      <h1>Código de Segurança</h1>
      <p>Digite o código que foi enviado para seu email aqui:</p>
      <form onSubmit={enviaForm}>
        <div className="input">
          <CodeInput />
        </div>
        <input type="submit" style={{ cursor: "pointer" }} value="Verificar" />
      </form>
    </Container>
  );
}
