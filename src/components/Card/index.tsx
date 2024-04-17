import "./styles.css"
import { SiContactlesspayment } from "react-icons/si";
import { TbClockHour3 } from "react-icons/tb";
import { MdOutlineDeliveryDining } from "react-icons/md";

export default function Card() {
    const openingHours = 'Todos os dias: 18:00 - 22:30';
    const delivery = 'Apenas delivery ou retirada';
    const payment = 'Cartão e pix';


    return (<>
        <div className="page-wrapper">
            <div className="container">
                <ul className="infographic-cards">
                    <li className="color-1">

                        <TbClockHour3 className="iconCard" />
                        <h5>HORÁRIOS</h5>
                        <h6>{openingHours}</h6>
                    </li>
                    <li className="color-2">

                        <MdOutlineDeliveryDining className="iconCard" />
                        <h5>ENTREGA</h5>
                        <h6>{delivery}</h6>
                    </li>
                    <li className="color-3">
                        <SiContactlesspayment className="iconCard" />
                        <h5>ACEITAMOS</h5>
                        <h6>{payment}</h6>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}