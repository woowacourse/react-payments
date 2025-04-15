/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { PropsWithChildren } from 'react'

interface TitleProps {
  description?: string
}

export default function Title({ children, description }: PropsWithChildren<TitleProps>) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      `}
    >
      <h1
        css={css`
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.5rem;
        `}
      >
        {children}
      </h1>
      {description && (
        <caption
          css={css`
            color: #8b95a1;
            font-size: 0.8rem;
          `}
        >
          {description}
        </caption>
      )}
    </div>
  )
}
