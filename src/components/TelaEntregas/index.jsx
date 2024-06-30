import Header from "../Header/index"
import Footer from "../Footer/index"
import Pedido from "../Pedido/index"

import style from './style.module.css'

export default function TelaEntregas() {
    return (
        <div className={style.conteiner}>
            <div className={style.conteudoPrincipal}>
                <Header />

                <div className={style.totalPedidos}>
                    <p className={style.totalPedidosTitulo}>Total de Pedidos</p>
                </div>

                <div className={style.pedidos}>
                    <a href="/pages/entregaEspecifica.html" style={{textDecoration: "none"}}>
                        <Pedido />
                    </a>
                    <Pedido />
                    <Pedido />
                    <Pedido />
                    <Pedido />
                    <Pedido />
                    <Pedido />
                    <Pedido />
                </div>


                <Footer />
            </div>
        </div>
    )
}