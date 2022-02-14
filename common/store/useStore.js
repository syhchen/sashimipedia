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
    MAGURO: {
      name: {
        jp: {
          romanji: ["Maguro"],
        },
        en: ["Bluefin Tuna"],
      },
      image: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Various_tuna_sashimi.jpg/2880px-Various_tuna_sashimi.jpg",
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
      image: [
        {
          src: "https://images.unsplash.com/photo-1635452273191-f08ce9934102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        },
      ],
    },
    CHUTORO: {
      name: {
        jp: {
          romanji: ["Chūtoro"],
        },
        en: ["Bluefin Tuna (Medium-Fatty)"],
      },
      image: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Rokusanen_Wakayama_Japan07s5.jpg/2880px-Rokusanen_Wakayama_Japan07s5.jpg",
        },
      ],
    },
    OTORO: {
      name: {
        jp: {
          romanji: ["Ōtoro"],
        },
        en: ["Bluefin Tuna (Fatty)"],
      },
      image: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Rokusanen_Wakayama_Japan08bs.jpg/2880px-Rokusanen_Wakayama_Japan08bs.jpg",
        },
      ],
    },
    // HIRAME: {
    //   name: {
    //     jp: {
    //       romanji: ["Hirame"],
    //     },
    //     en: ["Fluke", "Flounder"],
    //   },
    //   image: [
    //     {
    //       src: "",
    //     },
    //   ],
    // },
    // AJI: {
    //   name: {
    //     jp: {
    //       romanji: ["Aji", "Maaji"],
    //     },
    //     en: ["Horse Mackerel", "Jack Mackerel", "Scad"],
    //   },
    //   image: [
    //     {
    //       src: "",
    //     },
    //   ],
    // },
    TAI: {
      name: {
        jp: {
          romanji: ["Tai", "Madai"],
        },
        en: ["Red Sea Bream"],
      },
      image: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Red_sea_bream_sashimi_%2827992669723%29.jpg/2560px-Red_sea_bream_sashimi_%2827992669723%29.jpg",
        },
      ],
    },
    UNAGI: {
      name: {
        jp: {
          romanji: ["Unagi"],
        },
        en: ["Freshwater Eel"],
      },
      image: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/2/25/Unagi_Nigiri_Sushi_-_Suzuran_Japan_Foods_Trading.jpg",
        },
      ],
    },
    // SAWARA: {
    //   name: {
    //     jp: {
    //       romanji: ["Sawara"],
    //     },
    //     en: ["Spanish Mackerel"],
    //   },
    //   image: [
    //     {
    //       src: "",
    //     },
    //   ],
    // },
    // HOTATE: {
    //   name: {
    //     jp: {
    //       romanji: ["Hotate", "Hotategai"],
    //     },
    //     en: ["Scallop"],
    //   },
    //   image: [
    //     {
    //       src: "",
    //     },
    //   ],
    // },
  },
}
