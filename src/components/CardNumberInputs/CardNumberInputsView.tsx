import styled from '@emotion/styled';
import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { CardNumberInfo } from '../../types/models';

interface CardNumberInputsViewProps {
  cardNumbersInfo: CardNumberInfo[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

const CardNumberInputsView = ({
  cardNumbersInfo,
  handleInputChange,
}: CardNumberInputsViewProps) => {
  return (
    <Container data-testid="cardnumbers-component">
      <InputAreaHeader
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      />
      <InputTexts
        label="카드 번호"
        dataModels={cardNumbersInfo}
        onChange={handleInputChange}
      />
      <ErrorMessage>
        {cardNumbersInfo.some((data) => data.isError) ? ERROR_MESSAGE : ''}
      </ErrorMessage>
    </Container>
  );
};

export default CardNumberInputsView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.error};
  height: ${({ theme }) => theme.fontSizes.caption};
`;
