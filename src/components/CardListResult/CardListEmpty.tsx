import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function CardListEmpty() {
    return (
        <CardListEmptyContainer>
            <EmptyCard />
            <EmptyCardContent>등록된 카드가 없습니다</EmptyCardContent>
            <EmptyCardDescription>아래 버튼을 눌러 첫 카드를 등록해보세요</EmptyCardDescription>
            {/* 버튼 추상화해서 재사용하기 */}
            <Link to="/">카드 추가하기</Link>
        </CardListEmptyContainer>
    );
}

const CardListEmptyContainer = styled.div`
    width: 320px;
    height: 330px;
    padding-top: 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EmptyCard = styled.div`
    width: 160px;
    height: 100px;
    border-radius: 5px;
    border: 1px dashed #d9d9d9;
    background-color: #f5f5f5;
`;

const EmptyCardContent = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    color: #353c49;
`;
const EmptyCardDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #8c8c8c;
`;
