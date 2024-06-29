import "../../assets/styles/recuperarSenha.css";
import { MdOutlineEmail } from "react-icons/md";

export default function Login() {
  const enviaForm = e => {
    e.preventDefault();
    const email = document.querySelector("#IEmail");
    
    window.location.href = "/pages/codigoSeguranca.html"
  }

  return (
    <>
    <h1>Recuperar Senha</h1>
    <p>Um código será enviado para seu e-mail coloque-o abaixo.</p>
    <form onSubmit={enviaForm}>
      <div className="input">
          <label htmlFor="IEmail"><MdOutlineEmail /></label>
          <input type="email" autoComplete="on" name="Email" id="IEmail" placeholder="Digite seu E-mail" required />
      </div>
      <input type="submit" value="Enviar Código" />
    </form>
    </>
  );
}
