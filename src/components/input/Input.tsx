import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  designType?: 'basic' | 'underline';
  backgroundColor?: string;
}

export function Input({ designType = 'basic', backgroundColor, ...props }: Props) {
  return <Style.Input className={designType} backgroundColor={backgroundColor} {...props} />;
}

const Style = {
  Input: styled.input<Props>`
    display: flex;
    align-items: center;

    width: ${(props) => (props.width ? `${props.width}px` : '36px')};
    height: ${(props) => (props.height ? `${props.height}px` : '45px')};

    padding: 0;
    border: 0;
    border-radius: 7px;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#ecebf1')};

    font-size: 15px;
    text-align: center;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: #c6c6c6;
    }

    &.underline {
      border-radius: 0;
      border-bottom: 1px solid #737373;
      background-color: transparent;
    }
  `,
};

// export const Input = styled.input`
//   display: flex;
//   align-items: center;

//   width: ${(props) => `${props.width}px`};
//   height: 45px;

//   padding: 0;
//   border: 0;
//   border-radius: 7px;
//   background-color: #ecebf1;

//   font-size: 15px;
//   text-align: center;

//   :focus {
//     outline: none;
//   }

//   ::placeholder {
//     color: #c6c6c6;
//   }
// `;
