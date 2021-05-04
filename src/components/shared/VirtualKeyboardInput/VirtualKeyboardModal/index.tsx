import { useMemo, VFC } from 'react';
import shuffle from '../../../../utils/shuffle';
import Button from '../../Button';
import Container from '../../Container';
import VirtualKeyboardModalContainer from './styles';

interface Props {
  value: string;
  onChange: (value: string) => void;
  modalClose: () => void;
}

const VirtualKeyboardModal: VFC<Props> = ({ onChange, modalClose, value }) => {
  const numbersWithWhiteSpace = [...Array(12)].map((_, idx) => (idx < 10 ? idx.toString() : ''));
  const shuffled = useMemo(() => shuffle(numbersWithWhiteSpace), []);

  const Buttons = () =>
    shuffled.map((el, idx) =>
      el ? (
        <Button key={idx} type="button" width="25%" height="25%" onClick={() => onChange(value + el)}>
          {el}
        </Button>
      ) : (
        <Container key={idx} inlineBlock width="25%" height="10px" />
      )
    );

  return (
    <VirtualKeyboardModalContainer type="bottom" modalClose={modalClose}>
      {Buttons()}
      <Container inlineBlock width="50%" height="10px" />
      <Button type="button" width="50%" height="25%" onClick={() => onChange(value.substring(0, value.length - 1))}>
        {'<'}
      </Button>
    </VirtualKeyboardModalContainer>
  );
};

export default VirtualKeyboardModal;
