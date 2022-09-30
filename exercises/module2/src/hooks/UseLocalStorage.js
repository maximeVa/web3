import { useState } from 'react'

function useLocalStorage(key,initialValue) {
  const stored = window.localStorage.getItem(key)
  const firstValue =  stored ? JSON.parse(stored) : initialValue
  const [value, setValue] = useState(firstValue);

  const setValueInLocalStorage = (newValue) => {
    window.localStorage.setItem(key, JSON.stringify(newValue))
    setValue(newValue)
  }

  return [value, setValueInLocalStorage]

}

  export default useLocalStorage