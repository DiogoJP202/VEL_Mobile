import Header from "../Header/index"
import Footer from "../Footer/index"
import Pedido from "../Pedido/index"

import style from './style.module.css'
import { useNavigate } from "react-router-dom";

export default function TelaEntregas() {
    const navigate = useNavigate();
    return (
        <div className={style.conteiner}>
            <div className={style.conteudoPrincipal}>
                <Header />

                <div className={style.totalPedidos}>
                    <p className={style.totalPedidosTitulo}>Total de Pedidos</p>
                </div>

                <div className={style.pedidos}>
                    <a onClick={() => navigate("/entregaespecifica")} style={{textDecoration: "none", cursor: "pointer"}}>
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