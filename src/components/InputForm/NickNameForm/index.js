import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { NickNameInputContainer } from '../InputContainer/NickNameInputContainer';
import { InputButton } from '../InputButton';

export const NickNameForm = ({ nickName, submitCardNickName }) => {
  return (
    <Styled.Form onSubmit={submitCardNickName}>
      <Styled.InputContainer>
        <NickNameInputContainer
          nickName={nickName.value}
          autoFocus={'autoFocus'}
          handleChange={nickName.handleChange}
        />
      </Styled.InputContainer>
      <Styled.ButtonContainer>
        <InputButton text={'확인'} />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};

NickNameForm.propTypes = {
  nickName: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  }),
  submitCardNickName: PropTypes.func,
};
