import { useState } from 'react'

function useLocalStorage(key) {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem(key)) || {}
  )

  const setData = (id, value) => {
    setState(
      localStorage.setItem(key, JSON.stringify({ ...state, [id]: value }))
    )
  }

  return [state, setData]
}

export default useLocalStorage
