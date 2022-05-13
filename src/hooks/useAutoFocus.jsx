import { useRef } from 'react'

const useAutoFocus = ({ maxLength }) => {
  const refList = useRef([])

  const moveToNextInput = (target) => {
    const curIndex = refList.current.indexOf(target)
    if (target.value.length < maxLength[curIndex]) return

    if (curIndex < refList.current.length - 1) {
      refList.current[curIndex + 1].focus()
    }
  }

  return { refList, moveToNextInput }
}
export default useAutoFocus
