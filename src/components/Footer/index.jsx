import style from './style.module.css'
import iconeFin from '../../assets/imagens/icon/fin_icone.svg'
import iconeMoto from '../../assets/imagens/icon/moto_icone.svg'
import iconePerfil from '../../assets/imagens/icon/perfil_icone.svg'
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer className={style.footer}>
                <a onClick={() => navigate("/gerenciamentogastos")} style={{cursor: "pointer"}}><img className={style.icone} src={iconeFin} alt="Icone de Financeiro" /></a>
                <a onClick={() => navigate("/entregas")} style={{cursor: "pointer"}}><img className={style.icone} src={iconeMoto} alt="Icone de Moto" /></a>
                <a onClick={() => navigate("/configuracaointerface")} style={{cursor: "pointer"}}><img className={style.icone} src={iconePerfil} alt="Icone de Perfil" /></a>
        </footer>
    )

}