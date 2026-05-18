import type { Card } from "../../../pages/CardListPage/useCardList";
import { getIssuerCodeInfo } from "../../../utils/Validation";
import DeleteButton from "../../../assets/DeleteButton.svg"
import { CardAddButton, CardCompany, CardDeleteButton, CardInfoContainer, CardItem, CardListContainer, CardListPageLayout, CardNumber, CardPreviewBox, ExpirationDate, Title } from "./CardListSuccess.styles";

interface Props {
    cards: Card[];
    onClick: () => void;
    onDelete: (id: string) => void;
}

const CardListSuccess = ({ cards, onClick, onDelete }: Props) => {
    return (
        <CardListPageLayout>
            <Title>보유 카드 ({cards.length})</Title>

            <CardListContainer>
                {cards.map((card) => {
                    const issuerCodeInfo = getIssuerCodeInfo(card.issuerCode);

                    return (
                        <CardItem key={card.id}>
                            <CardPreviewBox backgroundColor={issuerCodeInfo.color} />
                            <CardInfoContainer>
                                <CardCompany>{issuerCodeInfo.name}</CardCompany>
                                <CardNumber>{card.number}</CardNumber>
                                <ExpirationDate>유효기간 {card.expirationDate}</ExpirationDate>
                            </CardInfoContainer>
                            <CardDeleteButton onClick={() => onDelete?.(card.id)} aria-label='카드 삭제'> 
                              <img src={DeleteButton} alt='삭제 버튼' />
                            </CardDeleteButton>
                        </CardItem>
                    );
                })}

                <CardAddButton onClick={onClick} aria-label="카드 추가 버튼">+ 카드 추가</CardAddButton>
            </CardListContainer>
        </CardListPageLayout>
    );
};

export const CardListSuccess;
