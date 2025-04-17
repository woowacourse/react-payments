import styled from '@emotion/styled'

export const Spacing = styled.div<{ size: number }>`
  height: ${(props) => props.size}px;
`

/* `${size}px`, */
