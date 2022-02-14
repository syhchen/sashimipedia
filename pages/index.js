import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import Lightbox from "react-image-lightbox"

import useStore from "../common/store/useStore"

import s from "../styles/index.module.css"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeEntry, setActiveEntry] = useState()

  const { store } = useStore()
  const { entries } = store
  const entryList = Object.entries(entries).filter(([key, entry]) => {
    const { name } = entry

    const matchKey = key.toLowerCase().includes(searchQuery.toLowerCase())
    const matchNameJp = name.jp.romanji.filter((name) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    const matchNameEn = name.en.filter((name) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return matchKey || matchNameJp.length > 0 || matchNameEn.length > 0
  })

  return (
    <div className={s.root}>
      <Head>
        <title>Sashimipedia</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {activeEntry && (
        <Lightbox
          mainSrc={entries[activeEntry].image[0]?.src}
          onCloseRequest={() => setActiveEntry(undefined)}
        />
      )}

      <header className={s.header}>
        <div className={s.headerTitleGroup}>
          <h1 className={s.headerTitle}>Sashimipedia</h1>
        </div>
        <div className={s.headerSubtitleGroup}>
          <p className={s.headerCredit}>
            ❤️ ’22 Valentine’s Day. By Stephen, for Steph.
          </p>
        </div>
        <div className={s.headerControlGroup}>
          <form className={s.headerSearchForm}>
            <input
              className={s.headerSearchInput}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sashimi..."
              value={searchQuery}
            />
          </form>
        </div>
      </header>

      <main className={s.main}>
        <ul className={s.entryList}>
          {entryList.map(([key, val]) => (
            <EntryItem key={key} onClick={() => setActiveEntry(key)} {...val} />
          ))}
        </ul>
      </main>
    </div>
  )
}

const EntryItem = ({ image, name, onClick }) => {
  const imageSrc = image[0]?.src

  const title = name.jp.romanji[0]
  const altTitles = name.jp.romanji.filter((_, i) => i !== 0).join(", ")

  const definitions = name.en

  return (
    <li className={s.entryItem}>
      <div className={s.entryItemColumn}>
        <div className={s.entryItemImageWrapper}>
          <div
            alt={`photo of ${title}`}
            className={s.entryItemImage}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
          <button className={s.entryItemImageButton} onClick={onClick} />
        </div>
      </div>
      <div className={s.entryItemColumn}>
        <div className={s.entryItemTitlesWrapper}>
          <h2 className={s.entryItemTitle}>{title}</h2>
          {altTitles.length > 0 && (
            <h3 className={s.entryItemAltTitles}>a.k.a. {altTitles}</h3>
          )}
        </div>
        <div className={s.entryItemDefinitionsWrapper}>
          <p className={s.entryItemDefinitions}>
            {definitions.map((definition, i) =>
              i === 0 ? (
                <strong key={i}>{definition}</strong>
              ) : (
                <span key={i}>, {definition}</span>
              )
            )}
          </p>
        </div>
      </div>
    </li>
  )
}

export default Index
