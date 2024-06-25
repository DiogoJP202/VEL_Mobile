import style from './style.module.css'
import iconeLocalizacao from '../../assets/imagens/icon/localizacao_icone.svg'
import iconeLocalizacaoMaps from '../../assets/imagens/icon/localizaçãoMaps_icone.svg'
import CardPagamento from '../CardPagamento/index'

export default function CardEndereco() {
    return (

        <>
            <div className={style.conteinerComanda}>

                <div className={style.containerSuperior}>

                    <div className={style.iconeContainer}>
                        <div className={style.iconeLaranja}></div>
                        <div className={style.line}></div>
                        <div className={`${style.iconeLaranja} ${style.iconeAzul}`}></div>
                    </div>


                    <div className={style.infoDelivery}>

                        <div className={style.enderecoInfo}>
                            <h1 className={style.tituloDelivery}>Seu local</h1>
                        </div>

                        <div className={style.enderecoInfo}>
                            <h1 className={style.tituloDelivery}>Fernanda Silva</h1>
                            <h1 className={`${style.tituloDelivery} ${style.enderecoDelivery}`}>R. dos Pinheiros - Pinheiros, São Paulo - SP, 08142-640</h1>
                        </div>
                    </div>

                    <div className={style.detalhesDelivery}>
                        <div className={style.horasDelivery}>
                            <img src={iconeLocalizacao} alt="Icone de Localização" />
                            <p className={style.horaTitulo}>1h20</p>
                        </div>
                    </div>
                </div>

                <div className={style.containerInferior}>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.1239011481575!2d-46.69131480825646!3d-23.566218415185762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce64bf76417eb1%3A0x6724ec7a08e66427!2sFazenda%20Itaim%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008142-640!5e0!3m2!1spt-BR!2sbr!4v1719179587127!5m2!1spt-BR!2sbr"
                        height="130px"
                        width="100%"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        style={{ border: 0, margin: '15px 0px' }}>
                    </iframe>

                    <a href='https://www.google.com/maps/place/Fazenda+Itaim,+S%C3%A3o+Paulo+-+SP,+08142-640/@-23.566218,-46.686165,13z/data=!4m6!3m5!1s0x94ce64bf76417eb1:0x6724ec7a08e66427!8m2!3d-23.5667918!4d-46.6859585!16s%2Fg%2F1thx55pd?hl=pt-BR&entry=ttu' 
                    target='_blank' 
                    className={style.botaoMaps}>
                        Ver rota no Google Maps
                        <img src={iconeLocalizacaoMaps} alt="Icone de Localização" />
                    </a>
                </div>

            </div>

            <CardPagamento metodoPagamento="dinheiro" valorPagamento="60.00" />
        </>

    )

}