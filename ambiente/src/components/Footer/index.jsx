import style from './style.module.css'
import iconeFin from '../../assets/imagens/icon/fin_icone.svg'
import iconeMoto from '../../assets/imagens/icon/moto_icone.svg'
import iconePerfil from '../../assets/imagens/icon/perfil_icone.svg'

export default function Footer() {
    return (
        <footer className={style.footer}>
                <img className={style.icone} src={iconeFin} alt="Icone de Financeiro" />
                <img className={style.icone} src={iconeMoto} alt="Icone de Moto" />
                <img className={style.icone} src={iconePerfil} alt="Icone de Perfil" />
        </footer>
    )

}