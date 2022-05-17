import Airtable from "airtable"

const baseId = `appursawGhvkwXpBS` // Sashimipedia
const tableId = `tblTI00qByPEC3lZC` // Main

Airtable.configure({ apiKey: process.env.AT_API_KEY })

const getRecords = async (_, res) => {
  const base = Airtable.base(baseId)
  const records = await base(tableId).select().all()

  return res.status(200).json({ records: sanitize(records) })
}

export default getRecords

const sanitize = (records) => records.map(({ fields }) => ({ fields }))
