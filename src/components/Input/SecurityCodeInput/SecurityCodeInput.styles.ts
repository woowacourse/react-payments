import styled from 'styled-components';
import { Container } from 'components/style/InputContainer';

export const Styled = {
  SecurityCodeContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11px;
    .error {
      border: 1px solid red;
      background-color: var(--primary-error-color);
    }
  `,
  SecurityCodeInputContainer: styled(Container)`
    width: 84px;
    Input {
      width: 100%;
      height: 44px;
      text-align: center;
      letter-spacing: 0.5rem;
    }
  `,

  SecurityCodeButton: styled.span`
    border-radius: 50%;
    border: 2px solid #bababa;
    width: 27px;
    height: 27px;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    color: var(--light-gray-text-color);

    :hover + span {
      display: block;
    }
  `,

  SecurityCodeNotification: styled.span`
    display: none;
    width: 170px;
    padding: 3px;
    border-radius: 7px;
    border: 2px solid var(--light-gray-text-color);
    font-size: 12px;
    font-weight: 600;
    color: var(--light-gray-text-color);
  `,
};
