import { useNavigate } from "react-router-dom";

export default function Botoes(props){
    const navigate = useNavigate();
    
    return(
        <>
            <div className="Botoes">
                <a onClick={() => navigate("/configuracaousuario")} style={{cursor: "pointer"}} className="Usuario">
                    <div className="Usuario">
                        <h2>Usuário</h2>
                    </div>
                </a>
                <a onClick={() => navigate("/configuracaointerface")} style={{cursor: "pointer"}} className="Interface">
                    <div className="Interface">
                        <h2>Interface</h2>
                    </div>
                </a>
            </div>
        </>
    )
}