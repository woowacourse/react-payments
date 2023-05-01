import React, { useState } from 'react';
import styled from 'styled-components';
import { TAB_INDEX_INFO } from '../../../constants/constant';
import { UseInputProps } from '../../../hooks/useInput';
import { Error } from '../../common/Error';
import { InformationButton } from '../../common/InformationButton';
import { Input } from '../../common/Input';
import { ToolTip } from '../../common/ToolTip';

interface CvcInputProps {
  cvcInformation: UseInputProps;
}

const { addCardPage } = TAB_INDEX_INFO;

export default function CvcInput({ cvcInformation }: CvcInputProps) {
  const [isOpenToolTip, setIsOpenToolTip] = useState(false);

  const handleToolTip = () => {
    setIsOpenToolTip((prev) => !prev);
  };

  return (
    <Container>
      <InformationAndInputWrapper>
        <Wrapper>
          <Input
            type="text"
            isPassword={true}
            textAlign="center"
            autoComplete="off"
            isNumber={true}
            id="cvc"
            placeholder="000"
            tabIndex={addCardPage.cvc}
            {...cvcInformation}
          />
        </Wrapper>
        <CvcButtonWrapper>
          <InformationButton onClick={handleToolTip} />
          {isOpenToolTip && (
            <ToolTipWrapper>
              <ToolTip
                onClick={handleToolTip}
                text={
                  'CVC번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다'
                }
              />
            </ToolTipWrapper>
          )}
        </CvcButtonWrapper>
      </InformationAndInputWrapper>
      {cvcInformation.error && <Error text={cvcInformation.error} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InformationAndInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
  padding: 0 16px;
`;

const CvcButtonWrapper = styled.div`
  position: relative;
  margin-left: 11px;
`;

const ToolTipWrapper = styled.div`
  position: absolute;
  bottom: 35px;
`;
