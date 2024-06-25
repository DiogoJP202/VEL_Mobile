import "../../assets/styles/login.css";
import iconeGoogle from "../../assets/images/googleIcon.png"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
  const enviaForm = e => {
    e.preventDefault();
    const email = document.querySelector("#ILogin");
    const senha = document.querySelector("#ISenha");

    window.location.href = "pages/entregas.html";
  }

  return (
    <>
    <h1>Login</h1>
    <form onSubmit={enviaForm}>
        <div>
            <div className="input">
                <label htmlFor="ILogin"><MdOutlineEmail /></label>
                <input type="email" name="Login" id="ILogin" placeholder="Login" required autoComplete="on" />
            </div>
            <div className="input">
                <label htmlFor="ISenha"><RiLockPasswordLine /></label>
                <input type="password" name="Senha" id="ISenha" placeholder="Senha" required autoComplete="on" />
            </div>
            <a href="/pages/paginaRecuperarSenha.html">Esqueci minha senha</a>
        </div>
        <input type="submit" value="Login" />
        <p>ou utilize sua conta</p>
        <img src={iconeGoogle} alt="Icone da google" />
    </form>
    </>
  );
}
