import * as S from './Spacing.styles'

interface SpacingProps {
  size: number
}

export default function Spacing({ size }: SpacingProps) {
  return <S.Spacing size={size} />
}
