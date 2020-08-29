import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "gcqfpt7p",
  dataset: "production",
  useCdn: true
})
