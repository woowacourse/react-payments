/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ChangeEventHandler } from 'react'

interface InputProps {
  placeholder: string
  maxLength: number
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  isError?: boolean
}

export default function Input({ placeholder, maxLength, value, onChange, isError }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      css={css`
        border: 1px solid ${isError ? '#f00' : '#acacac'};
        border-radius: 4px;
        padding: 8px;
        width: 100%;
        &::placeholder {
          color: #acacac;
        }
        appearance: none;
        ${isError && `outline: #f00`};
      `}
      onChange={onChange}
    />
  )
}
