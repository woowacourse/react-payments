import styled from 'styled-components';
import { Container } from 'components/style/InputContainer';

export const Styled = {
  SecurityCodeContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11px;
  `,
  SecurityCodeInputContainer: styled(Container)`
    width: 84px;

    Input {
      text-align: center;
      margin-left: 0.5rem;
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
    color: var(--grey-text-color);

    :hover + span {
      display: block;
    }
  `,

  SecurityCodeNotification: styled.span`
    display: none;
    width: 170px;
    padding: 0 2px;
    border-radius: 7px;
    border: 2px solid var(--light-gray-text-color);
    font-weight: 600;
    color: var(--gray-text-color);
  `,
};
