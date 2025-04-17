import * as S from './Title.styles'
import { PropsWithChildren } from 'react'

interface TitleProps {
  description?: string
}

export default function Title({ children, description }: PropsWithChildren<TitleProps>) {
  return (
    <S.TitleBox>
      <S.Title>{children}</S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.TitleBox>
  )
}
