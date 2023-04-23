import { InputBoxProps } from '../../../types/InputBox';
import * as styled from './OwnerName.styled';

interface OwnerNameProps extends InputBoxProps {
  ownerName: string;
  maxLength: number;
}

const OwnerName = ({ ownerName, maxLength, children, error }: OwnerNameProps) => {
  return (
    <styled.OwnerName>
      <label>
        <styled.LabelHeader>
          <div>카드 소유자 이름(선택)</div>
          <div>
            {ownerName.length} / {maxLength}
          </div>
        </styled.LabelHeader>
        {children}
      </label>
      {error?.ownerName && <styled.ErrorMessage>{error?.ownerName}</styled.ErrorMessage>}
    </styled.OwnerName>
  );
};

export default OwnerName;
