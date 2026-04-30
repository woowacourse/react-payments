import styled from '@emotion/styled';
import { isMasterCardNumber } from '../../utils/isMasterCardNumber';
import { isVisaCardNumber } from '../../utils/isVisaCardNumber';
import Mastercard from '../../../public/Mastercard.svg';
import Visa from '../../../public/Visa.svg';

interface CardPreviewProps {
    cardNumbers: string[];
    EXP: string[];
}

export default function CardPreview({ cardNumbers, EXP }: CardPreviewProps) {
    return (
        <CardPreviewStyle>
            <YellowBlock />
            <CardBrandPosition>
                {isMasterCardNumber(cardNumbers) && <CardBrandImage src={Mastercard} />}
                {isVisaCardNumber(cardNumbers) && <CardBrandImage src={Visa} />}
            </CardBrandPosition>
            <CardNumberPosition>
                {cardNumbers.map((number, index) =>
                    index > 1 ? (
                        <CardNumber key={`${number}-${index}`}>
                            {number.split('').map((num, bulletIndex) => (
                                <BulletStyle key={`${num}-${index}-${bulletIndex}`} />
                            ))}
                        </CardNumber>
                    ) : (
                        <CardNumber key={`${number}-${index}`}>{number}</CardNumber>
                    )
                )}
            </CardNumberPosition>
            <EXPNumberPosition>
                <EXPNumber>{EXP[0]}</EXPNumber>
                {EXP[1] && <EXPNumber>/{EXP[1]}</EXPNumber>}
            </EXPNumberPosition>
        </CardPreviewStyle>
    );
}

const CardPreviewStyle = styled.div`
    width: 212px;
    height: 132px;
    position: relative;
    border-radius: 4px;
    background-color: #333333;
    box-shadow: 3px 3px 5px 0px #00000040;
`;

const YellowBlock = styled.div`
    position: absolute;
    top: 8px;
    left: 12px;
    width: 36px;
    height: 22px;
    border: 0.5px solid #ddcd78;
    background-color: #ddcd78;
    border-radius: 4px;
`;

const CardBrandPosition = styled.div`
    position: absolute;
    top: 8px;
    left: 164px;
    width: 36px;
    height: 22px;
`;

const CardBrandImage = styled.img`
    width: 100%;
    height: 100%;
`;

const CardNumberPosition = styled.div`
    display: flex;
    position: absolute;
    top: 44px;
    left: 17px;
    gap: 10px;
`;

const CardNumber = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 16%;
    color: white;
    display: flex;
    gap: 5px;
    align-items: center;
    min-width: 34px;
`;

const BulletStyle = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: white;
    line-height: 20px;
    transform: translateY(-2px);
`;

const EXPNumberPosition = styled.div`
    position: absolute;
    top: 72px;
    left: 17px;
    display: flex;
`;
const EXPNumber = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 8%;
    color: white;
`;
