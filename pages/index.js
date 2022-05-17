import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import Lightbox from "react-image-lightbox"

import useStore from "../common/store/useStore"

import s from "../styles/index.module.css"

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeEntry, setActiveEntry] = useState()
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const { store } = useStore()
  const { entries } = store
  const entryList = Object.entries(entries).filter(([key, entry]) => {
    const { names } = entry

    const matchKey = key.toLowerCase().includes(searchQuery.toLowerCase())
    const matchNameEn = names.en.filter((name) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    const matchNameJp = names.jp.filter((name) =>
      name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return matchKey || matchNameJp.length > 0 || matchNameEn.length > 0
  })

  const CustomLightbox = ({ images }) => (
    <Lightbox
      mainSrc={images[lightboxIndex]?.large.url}
      nextSrc={
        images.length > 1
          ? images[(lightboxIndex + 1) % images.length]?.large.url
          : undefined
      }
      prevSrc={
        images.length > 1
          ? images[(lightboxIndex + images.length - 1) % images.length]?.large
              .url
          : undefined
      }
      onCloseRequest={() => {
        setActiveEntry(undefined)
        setLightboxIndex(0)
      }}
      onMoveNextRequest={() =>
        setLightboxIndex((lightboxIndex + 1) % images.length)
      }
      onMovePrevRequest={() =>
        setLightboxIndex((lightboxIndex + images.length - 1) % images.length)
      }
    />
  )

  return (
    <div className={s.root}>
      <Head>
        <title>Sashimipedia</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {activeEntry && <CustomLightbox images={entries[activeEntry].images} />}

      <header className={s.header}>
        <div className={s.headerTitleGroup}>
          <Image width={48} height={48} src="/icon.png" />
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

const EntryItem = ({ images, names, onClick }) => {
  const thumbnailSrc = images[0]?.large?.url

  const title = names.en[0]
  const altTitles = names.en.filter((_, i) => i !== 0).join(" · ")
  const jpTitles = names.jp.join(" · ")
  const cnTitles = names.cn.join(" · ")

  return (
    <li className={s.entryItem}>
      <div className={s.entryItemColumn}>
        <div className={s.entryItemImageWrapper}>
          <div
            alt={`photo of ${title}`}
            className={s.entryItemImage}
            style={{ backgroundImage: thumbnailSrc && `url(${thumbnailSrc})` }}
          />
          <button className={s.entryItemImageButton} onClick={onClick} />
        </div>
      </div>
      <div className={s.entryItemColumn}>
        <div className={s.entryItemTitlesWrapper}>
          <h2 className={s.entryItemTitle}>{title}</h2>
          {altTitles.length > 0 && (
            <h3 className={s.entryItemAltTitles}> · {altTitles}</h3>
          )}
        </div>
        {jpTitles.length > 0 && (
          <div className={s.entryItemDefinitionsWrapper}>
            <p className={s.entryItemDefinitions}>
              {jpTitles.length > 0 && <span>{jpTitles}</span>}
            </p>
          </div>
        )}
        {cnTitles.length > 0 && (
          <div className={s.entryItemDefinitionsWrapper}>
            <p className={s.entryItemDefinitions}>
              {cnTitles.length > 0 && <span>{cnTitles}</span>}
            </p>
          </div>
        )}
      </div>
    </li>
  )
}

export default Index
