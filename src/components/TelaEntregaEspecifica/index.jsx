import Header from "../Header/index";
import Footer from "../Footer/index";
import CardEndereco from "../CardEndereco/index";
import style from "./style.module.css";

export default function TelaEntregaEspecifica() {
  return (
    <div className={style.conteiner}>
      <div className={style.conteudoPrincipal}>
        <Header />
        <CardEndereco />
        <Footer />
      </div>
    </div>
  );
}
