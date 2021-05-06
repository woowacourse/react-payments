import styled from 'styled-components';
import { COLOR } from '../../constants/constant';

export const CardListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;

  .card {
    position: relative;
    margin: 3rem auto;
    width: 65%;
    height: 170px;

    .card-cover {
      border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;

      &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.5);
      }

      .card-menus {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 0.5px solid ${COLOR.WHITE};
        cursor: pointer;

        .card-menu {
          color: ${COLOR.WHITE};
          padding: 10px;

          &.change-name {
            border-right: 0.5px solid ${COLOR.WHITE};

            &:hover {
              background-color: rgba(45, 121, 199, 0.5);
            }
          }

          &.delete-card {
            &:hover {
              background-color: rgba(214, 79, 79, 0.5);
            }
          }
        }
      }
    }

    .card-nickname {
      padding: 10px 0;
      font-weight: bold;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .add-card {
  }
`;
