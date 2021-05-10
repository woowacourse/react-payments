import React from 'react';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import PropTypes from 'prop-types';

const CardPasswordInput = (props) => {
  const { password, handlePasswordInput } = props;

  return (
    <InputContainer title={'카드 비밀번호'} width={'w-7/12'}>
      <>
        {Array.from({ length: 4 }).map((_, index) => {
          const currentKey = Object.keys(password)[index] ?? '';
          return (
            <Input
              key={index}
              className={`mr-1.5 text-center ${index > 1 && 'bg-opacity-0'}`}
              width={'small'}
              type={'password'}
              length={1}
              name={currentKey ?? ''}
              value={password[currentKey] ?? '*'}
              onChange={handlePasswordInput}
            />
          );
        })}
      </>
    </InputContainer>
  );
};

export default CardPasswordInput;

CardPasswordInput.propTypes = {
  password: PropTypes.object.isRequired,
  handlePasswordInput: PropTypes.func.isRequired,
};
