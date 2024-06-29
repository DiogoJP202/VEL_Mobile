import "../../assets/styles/codigoSeguranca.css";
import { MdOutlineEmail } from "react-icons/md";
import CodeInput from "../../components/CodeInputs";

export default function Login() {
  const enviaForm = e => {
    e.preventDefault();
    const email = document.querySelector("#IEmail");
    
  }

  return (
    <>
    <h1>Código de Segurança</h1>
    <p>Digite o código  que foi enviado para seu email aqui:</p>
    <form onSubmit={enviaForm}>
      <div className="input">
          <CodeInput />
      </div>
      <input type="submit" value="Verificar" />
    </form>
    </>
  );
}
