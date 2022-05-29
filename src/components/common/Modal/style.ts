import styled from 'styled-components'

interface DimmerType {
  isOpen: boolean
}

const Dimmer = styled.div<DimmerType>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  top: 0;
  left: 0;
  position: fixed;
`

export { Dimmer }
