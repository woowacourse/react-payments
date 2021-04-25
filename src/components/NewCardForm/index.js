import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { NewCardFormWrapper } from './index.styles';
import { stringSeparatorFormat } from '../../utils/utils';
import { useState } from 'react';

const NewCardForm = ({ cardInfo, setNewCardInfo }) => {
  const [privateNumbers, setPrivateNumbers] = useState('');

  const onChangePasswordInput = (e) => {
    // TODO: 입력값이 숫자(음수X)인지, 최대 1글자 이하인지 검증
    // 각각 1글자이면(true), 아니면 false
    setNewCardInfo({
      ...cardInfo,
      password: { ...password, [e.target.name]: e.target.value },
    });
  };

  const onChangeCardInput = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case 'numbers':
        // 카드번호 - 숫자(음수X)인지(입력안되게 막기 밑에메세지), 최대 16글자 이하인지(입력안되게 막기 밑에메세지)
        // 16글자이면(true 바꾸기), 이하면 false로 바꾸기 - App에서 관리 X, NewCardForm에서 내부 state로 관리하면 될듯, 이거에 따라서 다음버튼 보여짐
        value = stringSeparatorFormat(value, 4, '-');
        setNewCardInfo({ ...cardInfo, [name]: value });

        setPrivateNumbers(
          value.slice(0, 10) +
            '*'.repeat(value.length > 10 ? value.length - 10 : 0)
        );
        break;
      case 'expireDate':
        // 만료일 - 숫자(음수X)인지, 최대 4글자 이하인지, 앞의두글자가 01~12 사이 숫자인지, 올해/이번달 이후인지 검증
        // 4글자이면(true), 아니면 false
        value = stringSeparatorFormat(value, 2, '/');
        break;
      case 'user':
        // 사용자명 - 최대 30글자 이하인지(입력안되게 막기 밑에메세지), 숫자X인지(입력안되게 막기 밑에메세지)
        // 무조건 true.
        value = value.toUpperCase();
        break;
      case 'cvc':
        // cvc - 3글자인지, 숫자인지
        // 3글자이면(true), 아니면 false
        break;
    }
    console.log(value.slice(-1)[0]);
    if (value.slice(-1)[0] === '*') return;
    setNewCardInfo({ ...cardInfo, [name]: value });
  };

  // 다음눌렀을때 실행되는 메서드 (App으로 빠질수도 있음)
  const onSubmitCardForm = (e) => {
    e.preventDefault();
    //다음 컴포넌트 렌더링
  };

  const { expireDate, user, cvc, password } = cardInfo;

  return (
    <NewCardFormWrapper onSubmit={onSubmitCardForm}>
      <div className='form__column'>
        <div className='input-label'>카드 번호</div>

        <Input
          type='text'
          name='numbers'
          value={privateNumbers}
          onChange={onChangeCardInput}
          required
        />
      </div>
      <div className='form__column'>
        <div className='input-label'>만료일</div>
        <Input
          type='text'
          placeholder='MM / YY'
          name='expireDate'
          value={expireDate}
          onChange={onChangeCardInput}
          required
        />
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
      </div>
      <div className='form__column'>
        <div className='input-label'>보안 코드(CVC/CVV)</div>
        <div className='input-main'>
          <Input
            type='number'
            name='cvc'
            minLength='3'
            maxLength='3'
            min='001'
            max='999'
            value={cvc}
            onChange={onChangeCardInput}
            required
          />
          <div className='help'>?</div>
        </div>
      </div>
      <div className='form__column'>
        <div className='input-label'>카드 비밀번호</div>
        <div className='input-main'>
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
          <div className='privacy-dot'>﹒</div>
          <div className='privacy-dot'>﹒</div>
        </div>
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
    numbers: PropTypes.string,
    user: PropTypes.string,
    expireDate: PropTypes.string,
    cvc: PropTypes.string,
    password: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
    }),
  }),

  setNewCardInfo: PropTypes.func,
};

export default NewCardForm;
