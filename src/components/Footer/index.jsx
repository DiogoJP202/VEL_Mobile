import style from './style.module.css'
import iconeFin from '../../assets/imagens/icon/fin_icone.svg'
import iconeMoto from '../../assets/imagens/icon/moto_icone.svg'
import iconePerfil from '../../assets/imagens/icon/perfil_icone.svg'

export default function Footer() {
    return (
        <footer className={style.footer}>
                <a href="/pages/gerenciamentoGastos.html"><img className={style.icone} src={iconeFin} alt="Icone de Financeiro" /></a>
                <a href="/pages/entregas.html"><img className={style.icone} src={iconeMoto} alt="Icone de Moto" /></a>
                <a href="/pages/configUsuario.html"><img className={style.icone} src={iconePerfil} alt="Icone de Perfil" /></a>
        </footer>
    )

}