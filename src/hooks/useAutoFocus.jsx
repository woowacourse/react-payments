import { useRef } from 'react'

const useAutoFocus = ({ maxLength }) => {
  const refList = useRef([])

  const moveToNextInput = ({ target }) => {
    if (target.value.length < maxLength) return

    const curIndex = refList.current.indexOf(target)
    if (curIndex < refList.current.length - 1) {
      refList.current[curIndex + 1].focus()
    }
  }

  return { refList, moveToNextInput }
}
export default useAutoFocus
