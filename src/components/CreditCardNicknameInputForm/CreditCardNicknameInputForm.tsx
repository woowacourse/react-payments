import Box from 'components/Box';
import CreditCard from 'components/CreditCard/CreditCard';
import FlexBox from 'components/FlexBox';
import styled from 'styled-components';
import * as T from 'types';

const NicknameInput = styled.input`
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    border-bottom-width: 1px;

    width: 100%;
    
    padding: 10px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
`;

interface CreditCardNicknameInputFormProps {
  creditCardForm: T.CreditCard;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

function CreditCardNicknameInputForm(
  { creditCardForm, nickname, setNickname }: CreditCardNicknameInputFormProps
) {
  const handleNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <Box>
      <Box>
        <FlexBox justifyContent="center">
          <CreditCard
            fullFilled
            creditCard={{
              companyId: creditCardForm.companyId,
              number: creditCardForm.number,
              expiry: creditCardForm.expiry,
              owner: creditCardForm.owner,
            }}
          />
        </FlexBox>
      </Box>
      <Box mt={3} mb={3}>

        <FlexBox justifyContent="center">
          <Box mt={6} mb={3}>
            <NicknameInput
              value={nickname}
              onChange={handleNicknameInput}
              placeholder="카드 별명을 입력하세요"
            />
          </Box>
        </FlexBox>
      </Box>
    </Box>

  );
}
export default CreditCardNicknameInputForm;
