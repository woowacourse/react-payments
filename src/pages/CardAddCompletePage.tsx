import styled from '@emotion/styled';
import { Navigate, useLocation } from 'react-router';
import ConfirmButton from '../components/ConfirmButton';
import { BRAND_SELECT_OPTIONS } from '../constants/BRAND_SELECT_OPTIONS';
import { isCardAddCompleteState } from '../types/CardAddCompleteState';
import ConfirmCircle from '../../public/Confirm Circle.svg';

export default function CardAddCompletePage() {
    const { state } = useLocation();

    if (!isCardAddCompleteState(state)) return <Navigate to="/" replace />;

    const { cardNumberPrefix, cardBrand } = state;
    const brandLabel = BRAND_SELECT_OPTIONS.find((o) => o.value === cardBrand)?.label ?? '';

    return (
        <Container>
            <ContentWrapper>
                <CheckCircle>
                    <img src={ConfirmCircle} />
                </CheckCircle>
                <Message>
                    {cardNumberPrefix && <strong>{cardNumberPrefix}로 시작하는</strong>}
                    <br />
                    {brandLabel}가 등록되었어요.
                </Message>
            </ContentWrapper>
            <ConfirmButton to="/" purpose="confirm" />
        </Container>
    );
}

const Container = styled.main`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    width: 375px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`;

const CheckCircle = styled.div`
    width: 76px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Message = styled.p`
    font-size: 25px;
    font-weight: 700;
    color: #353c49;
    text-align: center;
    line-height: 100%;
`;
