import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CardContext from '../../contexts/CardContext';
import CardPreview from '../common/CardPreview';
import TextBox from '../common/TextBox';
import Input from '../common/Input';
import Button from '../common/Button';

const StyledCompleteAddCardPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: 'center';
  align-items: 'center';

  .text-box {
    margin: 114px 17px 77px;
  }

  .small-card {
    width: 293px;
    height: 183px;
    margin: 0px 17px 33px;
  }

  .input-box {
    margin: 0 43px;
  }
`;

const CompleteAddCardPage = () => {
  const { values } = useContext(CardContext);
  return (
    <StyledCompleteAddCardPage>
      <TextBox fontSize={23}>카드등록이 완료되었습니다.</TextBox>
      <CardPreview values={values} />
      <Input underLine placeHolder="카드 별칭을 지정해주세요." />
      <Link to="/">
        <Button>확인</Button>
      </Link>
    </StyledCompleteAddCardPage>
  );
};

export default CompleteAddCardPage;
