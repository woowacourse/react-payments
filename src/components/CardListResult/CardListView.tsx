import type { CardInfo } from '../../apis/getMyCard';
import { ISSUER_CODE_MAP } from '../../constants/BRAND_SELECT_OPTIONS';
import AddCardButton from './AddCardButton';
import MyCardItem from './MyCardItem/MyCardItem';

interface CardListViewProps {
    cardItemInfos: CardInfo[];
    onDelete: (id: string) => void;
}

// 삭제 함수를 Page에서 아는게 어색할 것 같기도 하지만 삭제 훅을 조회 훅과 같은 위치에 둔다면 굳이 같은 훅을 Page와 여기서 2번 호출하게 것 같아서 전달하고 아무것도 안하더라도
// onDelete 전달받기로
// TODO 그럼 삭제 훅을 분리하는 건 어떤지?? 고민해보기
export default function CardListView({ cardItemInfos, onDelete }: CardListViewProps) {
    return (
        <div>
            {cardItemInfos.map((cardItem) => (
                <MyCardItem
                    id={cardItem.id}
                    key={cardItem.id}
                    cardIssuer={ISSUER_CODE_MAP[cardItem.issuerCode]}
                    cardNumbers={cardItem.number}
                    EXPDate={cardItem.expirationDate}
                    onDelete={onDelete}
                />
            ))}
            <AddCardButton />
        </div>
    );
}
