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
                                <CardNumber></CardNumber>
                                <ExpirationDate>유효기간 {card.expirationDate}</ExpirationDate>
                            </CardInfoContainer>
                            <CardDeleteButton onClick={() => onDelete?.(card.id)} />
                        </CardItem>
                    );
                })}
            </CardListContainer>
        </CardListPageLayout>
    );
}


export const CardListSuccess;
