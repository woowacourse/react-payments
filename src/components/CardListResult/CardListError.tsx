import styled from '@emotion/styled';
import ErrorIcon from '../../../public/ErrorIcon.svg';
import { Link } from 'react-router-dom';

export default function CardListError() {
    return (
        <CardListErrorContainer>
            <img src={ErrorIcon} />
            <CardListErrorContentContainer>
                <CardListErrorContent>카드 목록을 불러올 수 없어요</CardListErrorContent>
                <CardListErrorDescription>잠시 후 다시 시도해 주세요.</CardListErrorDescription>
            </CardListErrorContentContainer>
            {/* 버튼 추상화해서 재사용하기 */}
            <Link to="/">다시 시도</Link>
        </CardListErrorContainer>
    );
}

const CardListErrorContainer = styled.div`
    width: 320px;
    height: 338px;
    padding-top: 156px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
`;

const CardListErrorContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

const CardListErrorContent = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    color: #353c49;
    margin: 0;
`;

const CardListErrorDescription = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #8c8c8c;
    margin: 0;
`;
