import MasterCard from "../../../assets/Mastercard.png";
import Visa from "../../../assets/Visa.png";
import { EmptyImg, StyledImg } from "./CardBrandImage.styles";

interface Props {
    cardNumber: string,
}

export default function CardBrandImage({cardNumber}: Props) {
    function checkMasterCard() {
        const adb= Number(cardNumber.slice(0,2));
        return adb >= 51 && adb <= 55;
    }

    if(cardNumber.slice(0,1)==="4") {
        return <StyledImg src={Visa} alt="visa 로고 이미지" />
    }

    if(checkMasterCard()) {
        return <StyledImg src={MasterCard} alt="mastercard 로고 이미지" />
    }

    return <EmptyImg />
}