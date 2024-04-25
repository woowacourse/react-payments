import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const buttonStyle = css({
  backgroundColor: '#333333',
  width: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
  minHeight: '5%',
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#F3F3F3',
  padding: '30px auto',
});

interface FormButtonType {
  value: string;
}

function FormButton({ value }: FormButtonType) {
  return (
    <Link to="/completed">
      <button css={buttonStyle}>{value}</button>
    </Link>
  );
}

export default FormButton;
