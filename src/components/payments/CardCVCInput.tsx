import { useState } from 'react';
import styled from 'styled-components';
import HelperIcon from '../../assets/common/helper-icon.svg';
import { Icon } from '../common/Icon';
import { NumberInput } from '../common/NumberInput';
import { Tooltip } from '../common/Tooltip';

const StyledCardCVCInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TooltipContent = styled.div`
  width: 200px;

  white-space: normal;
  word-break: keep-all;
`;

type CardCVCInputProps = {
  helperTooltip?: boolean;
  value: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const CardCVCInput = (props: CardCVCInputProps) => {
  const { helperTooltip, value, onChange, onFocus, onBlur } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur?.();
  };

  return (
    <StyledCardCVCInput>
      <NumberInput
        maxCount={3}
        value={value}
        onChange={onChange}
        width={8}
        center
        type="password"
        onFocus={handleFocus}
        onBlur={handleBlur}
        role="textbox"
      />

      {helperTooltip && (
        <Tooltip
          placement="right"
          visible={focused}
          content={
            <TooltipContent>
              카드 뒷면의 CVC/CVV 번호 3자리 또는 4자리 숫자를 입력해주세요
            </TooltipContent>
          }
        >
          <Icon src={HelperIcon} size={3} alt="도움말" />
        </Tooltip>
      )}
    </StyledCardCVCInput>
  );
};
