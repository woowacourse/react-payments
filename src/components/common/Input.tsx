/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface InputProps {
  placeholder: string
}

export default function Input({ placeholder }: InputProps) {
  return (
    <input
      type="number"
      placeholder={placeholder}
      css={css`
        border: 1px solid #acacac;
        border-radius: 4px;
        padding: 8px;
        width: 100%;
        &::placeholder {
          color: #acacac;
        }
      `}
    />
  )
}
