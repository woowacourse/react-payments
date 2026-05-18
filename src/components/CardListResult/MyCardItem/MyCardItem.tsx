import styled from '@emotion/styled';
import Delete from '../../../../public/Delete.svg';
import { BRAND_SELECT_OPTIONS } from '../../../constants/BRAND_SELECT_OPTIONS';
import { CARD_ISSUER_COLOR } from '../../../constants/CARD_ISSUER_COLOR';

interface MyCardItemProps {
    cardIssuer: string;
    cardNumbers: string;
    EXPDate: string;
    onDelete: (id: string) => void;
    id: string;
}

interface CardIssuerColorBoxProps {
    backgroundColor: string;
}

// delete api 호출을 외부에서? 내부에서?
// 이 컴포넌트에서는 내부에서 하는게 좋을 것 같다고 생각했음
// 외부에서 했을 때 테스트나 재사용성에서 유의미하지만
// 전용 컴포넌트인 MyCardItem에서는 내부에서 하는 방향이 더 적절한 것 같은데..(x 버튼 눌렀을 때의 동작이 고정되며 이 Layout의 컴포넌트가 재사용될 곳이 없다고 판단)
// 근데 이 컴포넌트는 props로 받은 값들을 가지고 보여주는 거지 MyCardItem만의 고유한 상태가 새롭게 있는게 아니라서 순수 표현 컴포넌트에 가깝고 그렇기 때문에
// api를 호출하고 그 api 상태를 어쩌구 저쩌구 여기서 가지게 되면 다른 상태들은 주입받고, api 상태는 여기서 가지고 있는 셈이고 사이드 이펙트가 생기게 되니까 설계가 혼재된 느낌이 된다?
export default function MyCardItem({ cardIssuer, cardNumbers, EXPDate, onDelete, id }: MyCardItemProps) {
    return (
        <CardItemContainer>
            <CardIssuerColorBox backgroundColor={CARD_ISSUER_COLOR[cardIssuer]} />
            <CardInfoContainer>
                <CardIssuerName>
                    {/* TODO 매번 배열 순회해야해서 비효율적일 수 있으니 Record로 수정? -> 다른 곳도 다 바꿔야 함 */}
                    {BRAND_SELECT_OPTIONS.find((option) => option.value === cardIssuer)?.label}
                </CardIssuerName>
                <CardNumbers>{cardNumbers}</CardNumbers>
                <CardEXPInfo>유효기간 {EXPDate}</CardEXPInfo>
            </CardInfoContainer>
            <CardDeleteBtn onClick={() => onDelete(id)}>
                <img src={Delete} />
            </CardDeleteBtn>
        </CardItemContainer>
    );
}

const CardItemContainer = styled.div`
    width: 320px;
    height: 73px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    gap: 12px;
    align-items: center;
`;

const CardIssuerColorBox = styled.div<CardIssuerColorBoxProps>`
    width: 64px;
    height: 40px;
    border-radius: 4px;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

const CardInfoContainer = styled.div`
    width: 178px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const CardIssuerName = styled.h3`
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    color: #353c49;
    margin: 0;
`;

const CardNumbers = styled.p`
    font-weight: 400;
    font-size: 11px;
    line-height: 100%;
    color: #8c8c8c;
    margin: 0;
`;

const CardEXPInfo = styled.p`
    font-weight: 400;
    font-size: 9.5px;
    line-height: 100%;
    color: #8c8c8c;
    margin: 0;
`;

const CardDeleteBtn = styled.button`
    width: 30px;
    height: 27px;
    background-color: transparent;
    border: none;
`;
