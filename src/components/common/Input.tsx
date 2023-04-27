import type {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  HTMLInputTypeAttribute,
  ReactNode,
} from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';
import { Color } from '../../utils/Color';

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> & {
  type?: HTMLInputTypeAttribute;
  width?: number;
  center?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
  value: string;
  disabled?: boolean;
  maxCount?: number;
  variant?: 'underlined' | 'solid';
};

type StyledInputProps = {
  $width?: number;
  $center?: boolean;
  disabled?: boolean;
};

const BaseInput = styled.input<StyledInputProps>`
  width: ${(props) => (props.$width ? `${props.$width * 10}px` : '100%')};
  padding: 12px;

  border: none;
  border-radius: 8px;

  font-size: ${(props) => props.theme.fontSize.xlarge};
  text-align: ${(props) => (props.$center ? 'center' : 'initial')};

  outline: none;
  transition-property: background border box-shadow;
  transition-duration: 0.1s;

  &:focus {
    background: ${(props) => Color.fromHex(props.theme.color.primary).setLightness(95).toString()};
    border-color: ${(props) => props.theme.color.primary};
  }
`;

const SolidInput = styled(BaseInput)`
  background: ${(props) => (props.disabled ? 'none' : props.theme.color.grey2)};

  &:focus {
    box-shadow: 0 0 4px 2px
      ${(props) => Color.fromHex(props.theme.color.primary).setLightness(80).toString()};
  }
`;

const UnderlinedInput = styled(BaseInput)`
  background: transparent;
  border-radius: 0;
  border-bottom: 2px solid ${(props) => props.theme.fontColor.primary};
`;

const InputVariants = {
  solid: SolidInput,
  underlined: UnderlinedInput,
} as const satisfies Record<NonNullable<InputProps['variant']>, ReactNode>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type,
    width,
    center,
    placeholder,
    value,
    onChange,
    disabled,
    maxCount,
    variant,
    ...inputProps
  } = props;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (maxCount !== undefined && event.target.value.length > maxCount) return;

    onChange?.(event.target.value);
  };

  const InputComponent = InputVariants[variant ?? 'solid'];

  return (
    <InputComponent
      ref={ref}
      type={type}
      $width={width}
      $center={center}
      placeholder={placeholder}
      onChange={handleInputChange}
      value={value}
      disabled={disabled}
      {...inputProps}
    />
  );
});
