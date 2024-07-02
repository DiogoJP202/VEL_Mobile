import iconeGoogle from "../../assets/images/googleIcon.png";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Container } from "./login.ts";
import GlobalStyle from "../../components/globalStyles";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const enviaForm = (e) => {
    e.preventDefault();
    const email = document.querySelector("#ILogin");
    const senha = document.querySelector("#ISenha");

    navigate("/entregas");
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
      <h1>Login</h1>
      <form onSubmit={enviaForm}>
        <div>
          <div className="input">
            <label htmlFor="ILogin">
              <MdOutlineEmail />
            </label>
            <input
              type="email"
              name="Login"
              id="ILogin"
              placeholder="Login"
              required
              autoComplete="on"
            />
          </div>
          <div className="input">
            <label htmlFor="ISenha">
              <RiLockPasswordLine />
            </label>
            <input
              type="password"
              name="Senha"
              id="ISenha"
              placeholder="Senha"
              required
              autoComplete="on"
            />
          </div>
          <a onClick={() => navigate("/recuperarsenha")} style={{cursor: "pointer"}}>Esqueci minha senha</a>
        </div>
        <input type="submit" value="Login" style={{ cursor: "pointer" }} />
        <p>ou utilize sua conta</p>
        <img
          src={iconeGoogle}
          alt="Icone da google"
          style={{ cursor: "pointer" }}
        />
      </form>
    </Container>
  );
}
