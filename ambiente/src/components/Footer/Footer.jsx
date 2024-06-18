import balao from "../../assets/images/BalaoComSifrao.svg"
import moto from "../../assets/images/Moto.svg"
import pessoa from "../../assets/images/Pessoa.svg"


export default function Footer(){
    return(
        <>
            <footer>
                <div className="Icones">
                    <img src={balao} />
                    <img src={moto} />
                    <img src={pessoa} />
                </div>
            </footer>
        </>
    )
}