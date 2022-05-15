import { useState } from "react"

const useStore = (initialState) => {
  const [_state, _setState] = useState(initialState || defaultState)

  return { store: _state, setStore: _setState }
}

export default useStore

const defaultState = {
  entries: {
    SALMON: {
      name: {
        en: ["Salmon"],
        jp: ["___", "Sake", "Sāmon"],
        cn: ["鮭魚", "guī yú"],
      },
      image: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Salmon_sashimi.jpg",
        },
      ],
    },
  },
}
