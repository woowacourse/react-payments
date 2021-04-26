import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { NewCardFormWrapper } from './index.styles';

const NewCardForm = ({ cardInfo, setNewCardInfo }) => {
  const onChangeNumbersInput = (e) => {
    // 카드번호 - 숫자(음수X)인지(입력안되게 막기 밑에메세지), 최대 16글자 이하인지(입력안되게 막기 밑에메세지)
    // 16글자이면(true 바꾸기), 이하면 false로 바꾸기 - App에서 관리 X, NewCardForm에서 내부 state로 관리하면 될듯, 이거에 따라서 다음버튼 보여짐
    // value = stringSeparatorFormat(value, 4, '-');
    setNewCardInfo({
      ...cardInfo,
      numbers: { ...numbers, [e.target.name]: e.target.value },
    });
  };

  const onChangeExpireDateInput = (e) => {
    // 만료일 - 숫자(음수X)인지, 최대 4글자 이하인지, 앞의두글자가 01~12 사이 숫자인지, 올해/이번달 이후인지 검증
    // 4글자이면(true), 아니면 false
    // value = stringSeparatorFormat(value, 2, '/');

    setNewCardInfo({
      ...cardInfo,
      expireDate: { ...expireDate, [e.target.name]: e.target.value },
    });
  };

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
      case 'user':
        // 사용자명 - 최대 30글자 이하인지(입력안되게 막기 밑에메세지), 숫자X인지(입력안되게 막기 밑에메세지)
        // 무조건 true=
        value = value.toUpperCase();
        break;
      case 'cvc':
        // cvc - 3글자인지, 숫자인지
        // 3글자이면(true), 아니면 false
        break;
    }

    console.log(value.slice(-1)[0]);

    setNewCardInfo({ ...cardInfo, [name]: value });
  };

  // 다음눌렀을때 실행되는 메서드 (App으로 빠질수도 있음)
  const onSubmitCardForm = (e) => {
    e.preventDefault();
    //다음 컴포넌트 렌더링
  };

  const { numbers, expireDate, user, cvc, password } = cardInfo;

  return (
    <NewCardFormWrapper onSubmit={onSubmitCardForm}>
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
      </div>
      <div className='form__column'>
        <div className='input-label'>만료일</div>
        <div className='input-container'>
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
