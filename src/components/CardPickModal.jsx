import styled from 'styled-components';

import Button from 'components/common/Button';
import CardColorButton from 'components/CardColorButton';

const cardPresets = [
  {
    color: '#ADD8E6',
    title: '공원 카드',
  },
  {
    color: '#b91b1b71',
    title: '포코 카드',
  },
  {
    color: '#aac150c5',
    title: '포비 카드',
  },
  {
    color: '#1139c8c5',
    title: '앨버 카드',
  },
  {
    color: '#9833a7c5',
    title: '하리 카드',
  },
  {
    color: '#d9931bc5',
    title: '왓섭 카드',
  },
  {
    color: '#634848c5',
    title: '법인 카드',
  },
  {
    color: '#db3686c5',
    title: '포터 카드',
  },
];

const Styled = {
  CloseButton: styled(Button)`
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 10px;
  `,

  Dimmed: styled.div`
    background: #2725253d;
    height: 757px;
    width: 400px;
  `,

  Modal: styled.div`
    align-items: center;
    background: #fff;
    border-radius: 5% 5% 0 0;
    box-sizing: border-box;
    column-gap: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: calc(757px / 3);
    justify-content: center;
    padding: 30px;
    position: absolute;
    top: calc(757px / 3 * 2);
    width: 400px;
  `,
};

function CardPickModal({ setCardKind, toggleCardPickModal }) {
  return (
    <>
      <Styled.Modal>
        <Styled.CloseButton onClickFunc={toggleCardPickModal}>
          X
        </Styled.CloseButton>
        {cardPresets.map(({ color, title }) => (
          <CardColorButton
            key={`${color}-${title}`}
            buttonBgColor={color}
            cardTitle={title}
            onClickFunc={setCardKind}
          />
        ))}
      </Styled.Modal>
      <Styled.Dimmed onClick={toggleCardPickModal} />
    </>
  );
}

export default CardPickModal;
