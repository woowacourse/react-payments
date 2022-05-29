import { Dimmer } from 'components/common/Modal/style'

interface ModalType {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => {}
  children: React.ReactNode
}

function Modal({ isOpen, setIsOpen, children }: ModalType) {
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
