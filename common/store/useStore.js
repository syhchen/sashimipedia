import { useState } from "react"

const useStore = (initialState) => {
  const [_state, _setState] = useState(initialState || defaultState)

  return { store: _state, setStore: _setState }
}

export default useStore

const defaultState = {
  entries: {
    HAMACHI: {
      name: {
        jp: {
          romanji: ["Hamachi", "Inada"],
        },
        en: ["Yellowtail", "Amberjack"],
      },
      image: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Bangeo-hoe.jpg",
        },
      ],
    },
    SAKE: {
      name: {
        jp: {
          romanji: ["Sake", "Sāmon"],
        },
        en: ["Salmon"],
      },
      image: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Salmon_sashimi.jpg",
        },
      ],
    },
    AKAMI: {
      name: {
        jp: {
          romanji: ["Akami"],
        },
        en: ["Bluefin Tuna (Lean)"],
      },
      image: [],
    },
    CHUTORO: {
      name: {
        jp: {
          romanji: ["Chūtoro"],
        },
        en: ["Bluefin Tuna (Medium-Fatty)"],
      },
      image: [],
    },
    OTORO: {
      name: {
        jp: {
          romanji: ["Ōtoro"],
        },
        en: ["Bluefin Tuna (Fatty)"],
      },
      image: [],
    },
    HIRAME: {
      name: {
        jp: {
          romanji: ["Hirame"],
        },
        en: ["Fluke", "Flounder"],
      },
      image: [],
    },
    AJI: {
      name: {
        jp: {
          romanji: ["Aji", "Maaji"],
        },
        en: ["Horse Mackerel", "Jack Mackerel", "Scad"],
      },
      image: [],
    },
    TAI: {
      name: {
        jp: {
          romanji: ["Tai", "Madai"],
        },
        en: ["Red Sea Bream"],
      },
      image: [],
    },
    UNAGI: {
      name: {
        jp: {
          romanji: ["Unagi"],
        },
        en: ["Freshwater Eel"],
      },
      image: [],
    },
    SAWARA: {
      name: {
        jp: {
          romanji: ["Sawara"],
        },
        en: ["Spanish Mackerel"],
      },
      image: [],
    },
    HOTATE: {
      name: {
        jp: {
          romanji: ["Hotate", "Hotategai"],
        },
        en: ["Scallop"],
      },
      image: [],
    },
  },
}
