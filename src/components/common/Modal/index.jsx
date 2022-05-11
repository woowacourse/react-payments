import { Dimmer } from 'components/common/Modal/style'

function Modal({ isOpen, setIsOpen, children }) {
  const handleDimmerClick = () => {
    setIsOpen(false)
  }

  return (
    <Dimmer isOpen={isOpen} onClick={handleDimmerClick}>
      {children}
    </Dimmer>
  )
}

export default Modal
