import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { NewCardFormWrapper } from './index.styles';
import {
  getCardNumberMessage,
  getCVCMessage,
  getExpireDateMessage,
  getPasswordMessage,
  getUserMessage,
} from './cardFormValidator';

const NewCardForm = ({ cardInfo, setNewCardInfo }) => {
  const [errorMessage, setErrorMessage] = useState({
    numbers: '',
    expireDate: '',
    user: '',
    cvc: '',
    password: '',
  });

  const onChangeNumbersInput = (e) => {
    const message = getCardNumberMessage(e.target.value);
    setErrorMessage({
      ...errorMessage,
      numbers: message,
    });

    if (message !== '') return;

    setNewCardInfo({
      ...cardInfo,
      numbers: { ...numbers, [e.target.name]: e.target.value },
    });
  };

  const onChangeExpireDateInput = (e) => {
    const message = getExpireDateMessage(e.target.value);
    setErrorMessage({
      ...errorMessage,
      expireDate: message,
    });

    if (message !== '') return;

    setNewCardInfo({
      ...cardInfo,
      expireDate: { ...expireDate, [e.target.name]: e.target.value },
    });
  };

  const onChangePasswordInput = (e) => {
    const message = getPasswordMessage(e.target.value);
    setErrorMessage({
      ...errorMessage,
      password: message,
    });

    if (message !== '') return;

    setNewCardInfo({
      ...cardInfo,
      password: { ...password, [e.target.name]: e.target.value },
    });
  };

  const onChangeCardInput = (e) => {
    let { name, value } = e.target;
    let message = '';

    switch (name) {
      case 'user':
        message = getUserMessage(value);
        value = value.toUpperCase();
        break;

      case 'cvc':
        message = getCVCMessage(value);
        break;
    }

    setErrorMessage({
      ...errorMessage,
      [name]: message,
    });

    if (message !== '') return;

    setNewCardInfo({ ...cardInfo, [name]: value });
  };

  // 다음눌렀을때 실행되는 메서드 (App으로 빠질수도 있음)
  const onSubmitCardForm = (e) => {
    e.preventDefault();

    // 만료일 - 올해/이번달 이후인지 검증
    //다음 컴포넌트 렌더링
  };

  const { numbers, expireDate, user, cvc, password } = cardInfo;

  return (
    <NewCardFormWrapper onSubmit={onSubmitCardForm}>
      {console.log(errorMessage)}
      <div className='form__column'>
        <div className='input-label'>카드 번호</div>
        <div className='input-container'>
          <Input
            type='text'
            name='first'
            value={numbers.first}
            onChange={onChangeNumbersInput}
            minLength='4'
            maxLength='4'
            required
          />
          <span className='input-separator'>
            {numbers.first.length === 4 && '-'}
          </span>
          <Input
            type='text'
            name='second'
            value={numbers.second}
            minLength='4'
            maxLength='4'
            onChange={onChangeNumbersInput}
            required
          />
          <span className='input-separator'>
            {numbers.second.length === 4 && '-'}
          </span>
          <Input
            type='password'
            name='third'
            value={numbers.third}
            minLength='4'
            maxLength='4'
            onChange={onChangeNumbersInput}
            required
          />
          <span className='input-separator'>
            {numbers.third.length === 4 && '-'}
          </span>
          <Input
            type='password'
            minLength='4'
            maxLength='4'
            name='fourth'
            value={numbers.fourth}
            onChange={onChangeNumbersInput}
            required
          />
        </div>
        <div className='input-alert'>{errorMessage.numbers}</div>
      </div>
      <div className='form__column'>
        <div className='input-label'>만료일</div>
        <div className='input-container expire-date-container'>
          <Input
            type='text'
            placeholder='MM'
            name='month'
            min='01'
            max='12'
            minLength='2'
            maxLength='2'
            value={expireDate.month}
            onChange={onChangeExpireDateInput}
            required
          />
          <span className='input-separator gray'>/</span>
          <Input
            type='text'
            placeholder='YY'
            name='year'
            minLength='2'
            maxLength='2'
            value={expireDate.year}
            onChange={onChangeExpireDateInput}
            required
          />
        </div>
        <div className='input-alert'>{errorMessage.expireDate}</div>
      </div>
      <div className='form__column'>
        <div className='input-label'>
          <div>카드 소유자 이름 (선택)</div>
          <div>{user.length} / 30</div>
        </div>
        <Input
          type='text'
          placeholder='카드에 표시된 이름과 동일하게 입력하세요.'
          name='user'
          value={user}
          maxLength='30'
          onChange={onChangeCardInput}
        />
        <div className='input-alert'>{errorMessage.user}</div>
      </div>
      <div className='form__column'>
        <div className='input-label'>보안 코드(CVC/CVV)</div>
        <div className='input-main cvc-container'>
          <Input
            type='password'
            name='cvc'
            minLength='3'
            maxLength='3'
            value={cvc}
            onChange={onChangeCardInput}
            required
          />
          <div className='help'>?</div>
        </div>
        <div className='input-alert'>{errorMessage.cvc}</div>
      </div>
      <div className='form__column'>
        <div className='input-label'>카드 비밀번호</div>
        <div className='input-main password-container'>
          <Input
            type='password'
            value={password.first}
            maxLength='1'
            min='0'
            max='9'
            name='first'
            onChange={onChangePasswordInput}
            required
          />
          <Input
            type='password'
            value={password.second}
            maxLength='1'
            min='0'
            max='9'
            name='second'
            onChange={onChangePasswordInput}
            required
          />
          <div className='privacy-dot'>●</div>
          <div className='privacy-dot'>●</div>
        </div>
        <div className='input-alert'>{errorMessage.password}</div>
      </div>
      <div className='form__column'>
        <Button>다음</Button>
      </div>
    </NewCardFormWrapper>
  );
};

NewCardForm.propTypes = {
  cardInfo: PropTypes.shape({
    cardName: PropTypes.string,
    numbers: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    user: PropTypes.string,
    expireDate: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
    }),
    cvc: PropTypes.string,
    password: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
    }),
  }),

  setNewCardInfo: PropTypes.func,
};

export default NewCardForm;
