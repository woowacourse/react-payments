import * as styled from './CardRegisterPage.styled';

import useForm from '../../hooks/useForm';

import CardPreview from '../../components/CardPreview';
import Header from '../../components/Header';
import SelectBank from '../../components/SelectBank';
import {
  Input,
  CardNumbers,
  ExpirationDate,
  OwnerName,
  Password,
  SecurityNumbers,
} from '../../components/InputBox';

import validator from '../../domain/validator';

import { SetCardList } from '../../types';
import { CardInfo } from '../../types/card';
import PortalModal from '../../portal/PortalModal';
import useModalSwitch from '../../hooks/useModalSwitch';
import { useCardInfoValue } from '../../context/CardInfoContext';

interface CardRegisterPageProps {
  setCardList: SetCardList<CardInfo>;
}

const CardRegisterPage = ({ setCardList }: CardRegisterPageProps) => {
  const cardInfo = useCardInfoValue();
  const { onSubmit, onChange, error } = useForm(setCardList, validator);
  const { showModal, openModal, closeModal } = useModalSwitch();

  return (
    <styled.CardRegisterPage>
      <Header />
      <CardPreview cardInfo={cardInfo} openModal={openModal} />
      <styled.CardRegisterForm onSubmit={onSubmit}>
        <CardNumbers error={error}>
          <Input
            name="firstCardNumbers"
            value={cardInfo?.firstCardNumbers}
            onChange={onChange}
            maxLength={4}
            center={true}
            type="text"
            dataType="number"
          />
          <Input
            name="secondCardNumbers"
            value={cardInfo?.secondCardNumbers}
            onChange={onChange}
            maxLength={4}
            center={true}
            type="text"
            dataType="number"
          />
          <Input
            name="thirdCardNumbers"
            value={cardInfo?.thirdCardNumbers}
            onChange={onChange}
            maxLength={4}
            center={true}
            type="password"
            dataType="number"
          />
          <Input
            name="fourthCardNumbers"
            value={cardInfo?.fourthCardNumbers}
            onChange={onChange}
            maxLength={4}
            center={true}
            type="password"
            dataType="number"
          />
        </CardNumbers>
        <ExpirationDate error={error}>
          <Input
            name="expirationMonth"
            value={cardInfo?.expirationMonth}
            onChange={onChange}
            maxLength={2}
            center={true}
            placeholder="MM"
            type="text"
            dataType="number"
          />
          <Input
            name="expirationYear"
            value={cardInfo?.expirationYear}
            onChange={onChange}
            maxLength={2}
            center={true}
            placeholder="YY"
            type="text"
            dataType="number"
          />
        </ExpirationDate>
        <OwnerName ownerName={cardInfo?.ownerName} maxLength={30} error={error}>
          <Input
            name="ownerName"
            value={cardInfo?.ownerName}
            onChange={onChange}
            maxLength={30}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            type="text"
            dataType="text"
          />
        </OwnerName>
        <SecurityNumbers error={error}>
          <Input
            name="securityNumbers"
            value={cardInfo?.securityNumbers}
            onChange={onChange}
            maxLength={3}
            center={true}
            type="text"
            dataType="number"
          />
        </SecurityNumbers>
        <Password error={error}>
          <Input
            name="firstPassword"
            value={cardInfo?.firstPassword}
            onChange={onChange}
            maxLength={1}
            center={true}
            type="password"
            dataType="number"
          />
          <Input
            name="secondPassword"
            value={cardInfo?.secondPassword}
            onChange={onChange}
            maxLength={1}
            center={true}
            type="password"
            dataType="number"
          />
        </Password>
        <styled.CardInfoSubmitButtonContainer>
          <styled.CardInfoSubmitButton>다음</styled.CardInfoSubmitButton>
        </styled.CardInfoSubmitButtonContainer>
      </styled.CardRegisterForm>
      {showModal && (
        <PortalModal closeModal={closeModal}>
          <SelectBank />
        </PortalModal>
      )}
    </styled.CardRegisterPage>
  );
};

export default CardRegisterPage;
