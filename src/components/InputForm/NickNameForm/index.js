import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import { NickNameInputContainer } from '../InputContainer/NickNameInputContainer';
import { InputButton } from '../InputButton';

/**
 * Primary UI component for user interaction
 */
export const NickNameForm = ({ nickName, submitCardNickName }) => {
  return (
    <Styled.Form onSubmit={submitCardNickName}>
      <Styled.InputContainer>
        <NickNameInputContainer nickName={nickName.value} handleChange={nickName.handleChange} />
      </Styled.InputContainer>
      <Styled.ButtonContainer>
        <InputButton text={'확인'} />
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};

NickNameForm.propTypes = {};

NickNameForm.defaultProps = {};
