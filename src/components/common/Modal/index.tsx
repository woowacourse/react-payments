import { Dispatch, SetStateAction } from 'react'
import { Dimmer } from 'components/common/Modal/style'

interface ModalType {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
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
