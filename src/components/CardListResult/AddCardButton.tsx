import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// TODO ConfirmButton 컴포넌트랑 합쳐서 도메인 버튼 컴포넌트 만들기
export default function AddCardButton() {
    return <AddCardButtonStyle to="/">+ 카드 추가</AddCardButtonStyle>;
}

const AddCardButtonStyle = styled(Link)`
    width: 320px;
    height: 40px;
    border-radius: 5px;
    border: 1px dashed #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8c8c8c;
    box-sizing: border-box;
`;
