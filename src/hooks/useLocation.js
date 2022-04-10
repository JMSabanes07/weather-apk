import { useState } from 'react'
import GetLocation from 'react-native-get-location'

export const useLocation = () => {
  // const [current, setCurrent] = useState(undefined)

  const get = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        // setCurrent(location)
        console.log(location)
      })
      .catch((error) => {
        const { code, message } = error
        console.warn(code, message)
      })
  }

  return {
    get,
    // current,
  }
}
