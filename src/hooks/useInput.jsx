import { useState } from 'react'

function useInput(initialState) {
  const [inputState, setInputState] = useState(initialState)

  const setInput = ({ validator, key, name, value }) => {
    if (validator(value)) return

    setInputState((prev) => {
      if (name) {
        return { ...prev, key: { ...prev[key], [name]: value } }
      }
      return { ...prev, key: value }
    })
  }

  return [inputState, setInput]
}

export default useInput
