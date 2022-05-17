import { useEffect, useState } from "react"

const defaultStore = {
  entries: {},
}

const useStore = (initialStore) => {
  const [store, setStore] = useState(initialStore || defaultStore)

  useEffect(async () => {
    const entriesArr = await getEntries()
    const entries = entriesArr.reduce((acc, entry) => {
      acc[entry.key] = entry
      return acc
    }, {})

    setStore({ entries })
  }, [])

  return { store, setStore }
}

export default useStore

/**
 * @typedef {object} Entry
 * @property {string} key
 * @property {EntryNames} names
 * @property {Array<EntryThumbnails>} images
 *
 * @typedef {object} EntryNames
 * @property {Array<string>} en
 * @property {Array<string>} jp
 * @property {Array<string>} cn
 *
 * @typedef {object} EntryThumbnails
 * @property {EntryThumbnail?} full
 * @property {EntryThumbnail?} large
 * @property {EntryThumbnail?} small
 *
 * @typedef {object} EntryThumbnail
 * @property {string} url
 * @property {string} width
 * @property {string} height
 *
 * @returns {Promise<Array<Entry>>} entries
 */

const getEntries = () =>
  new Promise((resolve) =>
    fetch("/api/getRecords")
      .then((res) => res.json())
      .then(({ records }) => records.map((record) => record.fields))
      .then((data) =>
        data
          .filter((datum) => datum["Key"] !== undefined)
          .map((datum) => {
            const entry = {
              key: datum["Key"],
              names: { en: [], jp: [], cn: [] },
              images: [],
            }

            entry.names.en = [
              "English Name 1",
              "English Name 2",
              "English Name 3",
            ]
              .filter((field) => datum[field] !== undefined)
              .map((field) => datum[field])

            entry.names.jp = [
              "Japanese Name 1",
              "Japanese Name 2",
              "Japanese Name 3",
            ]
              .filter((field) => datum[field] !== undefined)
              .map((field) => datum[field])

            entry.names.cn = [
              "Chinese Name 1",
              "Chinese Name 2",
              "Chinese Name 3",
            ]
              .filter((field) => datum[field] !== undefined)
              .map((field) => datum[field])

            entry.images = (datum.Images || []).map(
              ({ thumbnails }) => thumbnails
            )

            return entry
          })
      )
      .then((entries) => resolve(entries))
  )
