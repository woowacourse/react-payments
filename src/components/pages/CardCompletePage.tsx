import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CardPublicInfo } from "../../types/Card";
import CardItem from "../Card/CardItem";
import Title from "../common/Title";
import Button from "../common/Button";
import Input from "../common/Input";
import useNickName from "../../hooks/cardItemInputs/useNickName";
import InputGroup from "../common/InputGroup";

interface CardCompletePageProps {
  getCardItem: (id: number) => CardPublicInfo | undefined;
  setCardNickName: (id: number, nickName: string) => void;
}

const CardCompletePage = ({ getCardItem, setCardNickName }: CardCompletePageProps) => {
  const navigate = useNavigate();
  const { nickName, onChangeNickName, errorMessage } = useNickName();
  const { id } = useParams();
  const card = getCardItem(Number(id));

  const handleClickButton = () => {
    setCardNickName(Number(id), nickName);
    navigate("/");
  };

  return (
    <PageContainer>
      {card ? (
        <>
          <Title title="카드 등록이 완료되었습니다." size="large" />
          <CardItem card={card} />
          <InputWrapper>
            <InputGroup errorMessage={errorMessage}>
              <NickNameInputBox>
                <Input placeholder="카드 별칭(생략 가능)" value={nickName} onChange={onChangeNickName} />
              </NickNameInputBox>
            </InputGroup>
          </InputWrapper>
        </>
      ) : (
        <Title title="카드 등록에 실패했습니다." size="large" />
      )}
      <ButtonContainer>
        <Button onClick={handleClickButton} isActive>
          확인
        </Button>
      </ButtonContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 130px 27px;
`;

const NickNameInputBox = styled.div`
  padding: 5px 0;
  border-bottom: 1px solid black;
`;

const InputWrapper = styled.div`
  margin-top: 100px;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  margin-top: 120px;
`;

export default CardCompletePage;
