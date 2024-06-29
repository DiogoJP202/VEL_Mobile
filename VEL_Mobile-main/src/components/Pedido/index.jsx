import style from './style.module.css'
import iconeLocalizacao from '../../assets/imagens/icon/localizacao_icone.svg'
import iconeSeta from '../../assets/imagens/icon/seta_icone.svg'

export default function Comandax() {
    return (
        <div className={style.conteinerComanda}>

            <div className={style.iconeContainer}>
                <div className={style.iconeLaranja}></div>
                <div className={style.line}></div>
                <div className={`${style.iconeLaranja} ${style.iconeAzul}`}></div>
            </div>


            <div className={style.infoDelivery}>
                <h1 className={style.tituloDelivery}>Food & Drink</h1>
                <h1 className={`${style.tituloDelivery} ${style.enderecoDelivery}`}>R. dos Pinheiros - Pinheiros, São Paulo - SP, 08142-640</h1>
            </div>

            <div className={style.detalhesDelivery}>

                <div className={style.horasDelivery}>
                    <img src={iconeLocalizacao} alt="Icone de Localização"/>
                    <p className={style.horaTitulo}>1h20</p>
                </div>

                <div className={style.avancarDelivery}>
                    <img className={style.horaTitulo} src={iconeSeta} alt="Icone de Seta"/>
                </div>
            </div>
        </div>
    )

}