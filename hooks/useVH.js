import { useCallback, useEffect, useState } from 'react'

const VARIABLE_NAME = '--vh'

const getCurrentVh = () =>
  // window check for server-side rendering
  typeof window !== 'undefined'
    ? Number((window.innerHeight * 0.01).toFixed(2))
    : 0

let count = 0

const useVH = () => {
  const [vh, setVh] = useState(getCurrentVh())
  const updateVh = useCallback(() => {
    const newVh = getCurrentVh()

    document.documentElement.style.setProperty(VARIABLE_NAME, `${newVh}px`)
    setVh(newVh)
  }, [setVh])

  useEffect(() => {
    count += 1

    updateVh()

    window.addEventListener('resize', updateVh)

    return () => {
      window.removeEventListener('resize', updateVh)

      count -= 1

      if (count === 0) { document.documentElement.style.removeProperty(VARIABLE_NAME) }
    }
  }, [updateVh])

  return vh
}

export default useVH
