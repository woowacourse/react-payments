/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ChangeEventHandler } from 'react'

interface InputProps {
  placeholder: string
  maxLength: number
  value?: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ placeholder, maxLength, value, onChange }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      css={css`
        border: 1px solid #acacac;
        border-radius: 4px;
        padding: 8px;
        width: 100%;
        &::placeholder {
          color: #acacac;
        }
        appearance: none;
      `}
      onChange={onChange}
    />
  )
}
