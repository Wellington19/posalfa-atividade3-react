import { useState, useEffect } from 'react'

const initialState = {
  error: undefined,
  data: undefined,
  loading: undefined
}

export default function useApi({ url }) {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState({
      ...initialState,
      loading: true
    })

    async function request() {
      try {
        const r = await fetch(url)
        const json = await r.json()
        setState({
          ...initialState,
          data: json
        })
      } catch (error) {
        setState({
          ...initialState,
          error
        })
      }
    }

    request()
  }, [url])

  return state
}