import style from './style.module.css'


export default function CardPagamento(props) {
    return (
        <div className={style.conteinerComanda}>

            <h1 className={style.tituloDelivery}>Informações de pagamento</h1>

            <p className={`${style.tituloDelivery} ${style.enderecoDelivery}`}>Dinheiro: <span>R${props.valorPagamento}</span></p>
            {
                props.metodoPagamento === "dinheiro" && (
                    <p className={`${style.tituloDelivery} ${style.enderecoDelivery}`}>Troco: <span>R$120.00</span></p>
                )
            }
        </div>
    )
}