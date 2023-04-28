import Box from 'components/Box';
import CreditCard from 'components/CreditCard/CreditCard';
import FlexBox from 'components/FlexBox';
import * as T from 'types';

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
          <input value={nickname} onChange={handleNicknameInput} />
        </FlexBox>
      </Box>
    </Box>

  );
}
export default CreditCardNicknameInputForm;
