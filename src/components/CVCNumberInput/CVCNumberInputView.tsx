import styled from '@emotion/styled';
import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';
import { CVCNumberInfo } from '../../types/models';

interface CVCNumberInputViewProps {
  cvcNumberInfo: CVCNumberInfo;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

const CVCNumberInputView = ({
  cvcNumberInfo,
  handleInputChange,
}: CVCNumberInputViewProps) => {
  return (
    <Container data-testid="cvcnumbers-component">
      <InputAreaHeader title="CVC 번호를 입력해 주세요" />
      <InputTexts
        dataModels={cvcNumberInfo}
        label="CVC"
        onChange={handleInputChange}
      />
      <ErrorMessage>{cvcNumberInfo.isError ? ERROR_MESSAGE : ''}</ErrorMessage>
    </Container>
  );
};

export default CVCNumberInputView;

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
