import { useState } from 'react'

function useLocalStorage(key: string) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(key) || '') || {}
  )

  const setData = (id: string, value: object) => {
    setState(
      localStorage.setItem(key, JSON.stringify({ ...state, [id]: value }))
    )
  }

  return [state, setData]
}

export default useLocalStorage
