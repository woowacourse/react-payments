import * as S from 'styles.js';

export default function Dimmer({ onClick, show }) {
  return <S.Dimmer onClick={onClick} show={show}></S.Dimmer>;
}
