import React from 'react';
import InputSection from '../Box/InputSection';
import InputBox from '../Common/InputBox';
import { InputStateProps } from '../../types';
import styled from 'styled-components';

const SecurityCodeInput = (props: InputStateProps) => {
  const inputs = [{ type: 'password', maxLength: 3, required: true, textSecurity: true }];
  return (
    <InputSection label="보안 코드(CVC/CVV)">
      <InputBox inputs={inputs} align="center" {...props} />
      <HelpButton>
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="13.5" cy="13.5" r="13" fill="white" stroke="#BABABA" />
          <path
            d="M12.5547 16.8203C12.5547 15.9544 12.6621 15.2643 12.877 14.75C13.0918 14.2357 13.515 13.6725 14.1465 13.0605C14.7845 12.4421 15.1882 12.0026 15.3574 11.7422C15.6178 11.3451 15.748 10.9154 15.748 10.4531C15.748 9.84115 15.5951 9.37565 15.2891 9.05664C14.9896 8.73112 14.5469 8.56836 13.9609 8.56836C13.401 8.56836 12.9486 8.72786 12.6035 9.04688C12.265 9.35938 12.0957 9.78581 12.0957 10.3262H9.72266C9.73568 9.17383 10.1263 8.26237 10.8945 7.5918C11.6693 6.92122 12.6914 6.58594 13.9609 6.58594C15.2695 6.58594 16.2884 6.91797 17.0176 7.58203C17.7533 8.24609 18.1211 9.17383 18.1211 10.3652C18.1211 11.4264 17.6263 12.4714 16.6367 13.5L15.4355 14.6816C15.0059 15.1699 14.7845 15.8828 14.7715 16.8203H12.5547ZM12.3887 19.8574C12.3887 19.4733 12.5091 19.1641 12.75 18.9297C12.9909 18.6888 13.3164 18.5684 13.7266 18.5684C14.1432 18.5684 14.472 18.6921 14.7129 18.9395C14.9538 19.1803 15.0742 19.4863 15.0742 19.8574C15.0742 20.2155 14.957 20.515 14.7227 20.7559C14.4883 20.9967 14.1562 21.1172 13.7266 21.1172C13.2969 21.1172 12.9648 20.9967 12.7305 20.7559C12.5026 20.515 12.3887 20.2155 12.3887 19.8574Z"
            fill="#969696"
          />
        </svg>
      </HelpButton>
    </InputSection>
  );
};

export default SecurityCodeInput;

const HelpButton = styled.div`
  margin-left: 6px;
  cursor: pointer;
  position: relative;
  &:hover {
    &::before {
      top: 50%;
      transform: translateY(-50%);
      left: 40px;
      position: absolute;
      content: '카드 뒷면에 입력 된 마지막 숫자 3자리를 입력해주세요.';
      width: 130px;
      height: 50px;
      background: #ecebf1;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      color: #525252;
      padding: 0 10px;
    }
  }
`;
