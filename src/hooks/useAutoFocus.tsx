import { useRef } from 'react'

interface useAutoFocusType {
  maxLength: number[]
}

const useAutoFocus = ({ maxLength }: useAutoFocusType) => {
  const refList = useRef<Array<HTMLInputElement>>([])

  const moveToNextInput = (target: HTMLInputElement) => {
    const curIndex = refList.current.indexOf(target)
    if (target.value.length < maxLength[curIndex]) return

    if (curIndex < refList.current.length - 1) {
      refList.current[curIndex + 1].focus()
    }
  }

  return { refList, moveToNextInput }
}
export default useAutoFocus
