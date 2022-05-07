import PointerBox from 'components/PointerBox/PointerBox';

export default function ClickCardBox({ children, onClick }) {
  return <PointerBox onClick={onClick}>{children}</PointerBox>;
}
