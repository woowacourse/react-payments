/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import EasyField from './EasyField';
import EasyForm from './EasyForm';
import CardPreview from './CardPreview';

const CardForm = () => {
  return (
    <EasyForm
      initialValues={{
        cardNumber: {
          first: '',
          second: '',
          third: '',
          fourth: '',
        },
        expiredDate: {
          month: '',
          year: '',
        },
        owner: '',
        cvc: '',
        password: {
          firstDigit: '',
          secondDigit: '',
        },
      }}
      onSubmit={(data, setSubmitting) => {
        setSubmitting(true);
        console.log(data);
        setSubmitting(false);
      }}
    >
      {(values, submitting, handleChange, handleSubmit) => (
        <>
          <CardPreview
            cardNumber={values.cardNumber}
            expiredDate={values.expiredDate}
            owner={values.owner}
          />
          <form onSubmit={handleSubmit} disabled={submitting}>
            <label>카드 번호</label>
            <EasyField
              name="cardNumber"
              value={values.cardNumber}
              onChange={handleChange}
              className="field"
            >
              <input name="first" type="text" maxLength="4" required />
              <p>-</p>
              <input name="second" type="text" maxLength="4" required />
              <p>-</p>
              <input name="third" type="password" maxLength="4" required />
              <p>-</p>
              <input name="fourth" type="password" maxLength="4" required />
            </EasyField>
            <label>만료일</label>
            <EasyField
              name="expiredDate"
              value={values.expiredDate}
              onChange={handleChange}
              className="field"
            >
              <input
                name="month"
                type="text"
                minLength="2"
                maxLength="2"
                required
              />
              <p>/</p>
              <input
                name="year"
                type="text"
                minLength="2"
                maxLength="2"
                required
              />
            </EasyField>
            <label>소유자</label>
            <input
              name="owner"
              type="text"
              maxLength="30"
              value={values.owner}
              onChange={({ target }) => {
                handleChange('owner', () => target.value);
              }}
              required
            />
            <label>CVC</label>
            <input
              name="cvc"
              type="text"
              minLength="3"
              maxLength="3"
              value={values.cvc}
              onChange={({ target }) => {
                handleChange('cvc', () => target.value);
              }}
              required
            />
            <label>비밀번호</label>
            <EasyField
              name="password"
              value={values.password}
              onChange={handleChange}
              className="field"
            >
              <input name="firstDigit" type="text" maxLength="1" required />
              <input name="secondDigit" type="text" maxLength="1" required />
            </EasyField>

            <button type="submit">submit</button>
          </form>
        </>
      )}
    </EasyForm>
  );
};

export default CardForm;
