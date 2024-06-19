import Header from "../Header/index"
import Footer from "../Footer/index"

import style from './style.module.css'

export default function TelaEntregas() {
    return (
        <div className={style.conteiner}>
            <div className={style.conteudoPrincipal}>
                <Header />
                <Footer />

                <div className={style.totalPedidos}>
                    <p className={style.totalPedidosTitulo}>Total de Pedidos</p>
                </div>
            </div>
        </div>
    )
}