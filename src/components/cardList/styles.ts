import styled from 'styled-components';
import { IconButtonContainer } from '../shared/Button';
import { Z_INDEX_LAYER } from '../../constants/style';

export const CardListContainer = styled.ul`
  height: 75vh;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 4rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .card-item {
    position: relative;
    margin-bottom: 4.25rem;
    cursor: pointer;

    ${IconButtonContainer} {
      position: absolute;
      right: -1.5em;
      top: -1.5em;
      z-index: ${Z_INDEX_LAYER.MIDDLE_GROUND};
    }

    .nickname {
      position: absolute;
      left: 50%;
      bottom: -2rem;
      transform: translateX(-50%);
      font-weight: 500;
      display: flex;
    }

    .nickname.edit {
      cursor: text;
      img {
        width: 1.2rem;
        position: absolute;
        right: -1.25rem;
        top: -0.5rem;
      }
    }
  }
`;
