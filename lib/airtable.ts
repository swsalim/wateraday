import { cache } from 'react'
import { AgeGroup, Brand, Category, Product, Tag } from '@/types'
import Airtable from 'airtable'

// Keyed object types for quick lookup
type KeyedBrands = {
  [key: string]: Brand
}

type KeyedCategories = {
  [key: string]: Category
}

type KeyedAgeGroups = {
  [key: string]: AgeGroup
}

type KeyedTags = {
  [key: string]: AgeGroup
}

// Initialize Airtable with your API key and base ID
const base = new Airtable({
  apiKey: process.env.NEXT_AIRTABLE_PERSONAL_ACCESS_TOKEN as string,
}).base(process.env.NEXT_AIRTABLE_BASE_ID as string)

export const getAgeGroups = cache(async (): Promise<KeyedAgeGroups> => {
  const ageGroupRecords = await base('Age Groups').select({}).all()
  const ageGroups: KeyedAgeGroups = {}

  for (const record of ageGroupRecords) {
    const id = record.id
    const name = record.fields.name as string
    const slug = record.fields.slug as string
    ageGroups[id] = { id, name, slug }
  }
  return ageGroups
})

export const getBrands = cache(async (): Promise<KeyedBrands> => {
  const brandRecords = await base('Brands').select({}).all()
  const brands: KeyedBrands = {}

  for (const record of brandRecords) {
    const id = record.id
    const name = record.fields.name as string
    const slug = record.fields.slug as string
    brands[id] = { id, name, slug }
  }
  return brands
})

export const getTags = cache(async (): Promise<KeyedTags> => {
  const tagRecords = await base('Tags').select({}).all()
  const tags: KeyedTags = {}

  for (const record of tagRecords) {
    const id = record.id
    const name = record.fields.name as string
    const slug = record.fields.slug as string
    tags[id] = { id, name, slug }
  }
  return tags
})

// export async function getBrands(): Promise<KeyedBrands> {
//   const brandRecords = await base('Brands').select({}).all()
//   const brands: KeyedBrands = {}

//   for (const record of brandRecords) {
//     const id = record.id
//     const name = record.fields.name as string
//     const slug = record.fields.slug as string
//     brands[id] = { id, name, slug }
//   }
//   return brands
// }

export const getCategories = cache(async (): Promise<KeyedCategories> => {
  const categoryRecords = await base('Categories').select({}).all()
  const categories: KeyedCategories = {}
  for (const record of categoryRecords) {
    const id = record.id
    const name = record.fields.name as string
    const slug = record.fields.slug as string
    categories[id] = { id, name, slug }
  }
  return categories
})

export const getProducts = async (): Promise<Product[]> => {
  const ageGroups = await getAgeGroups()
  const brands = await getBrands()
  const categories = await getCategories()
  const tags = await getTags()
  const productTable = base('Products')
  const records = await productTable
    .select({
      filterByFormula: 'AND(isPublished, {isPublished} = TRUE())',
      sort: [{ field: 'modified', direction: 'desc' }],
      view: 'Grid view',
    })
    .all()

  return records.map((record) => {
    // Type guard for AgeGroups[]
    const recordAgeGroups = Array.isArray(record.fields.ageGroups)
      ? (record.fields.ageGroups as string[])
      : []

    // Type guard for Brand[]
    const recordBrands = Array.isArray(record.fields.brand)
      ? (record.fields.brand as string[])
      : []

    // Type guard for Categories[]
    const recordCategories = Array.isArray(record.fields.categories)
      ? (record.fields.categories as string[])
      : []

    // Type guard for Tags[]
    const recordTags = Array.isArray(record.fields.tags)
      ? (record.fields.tags as string[])
      : []

    const product: Product = {
      id: record.id,
      name: record.fields.name as string,
      brand: recordBrands.length > 0 ? brands[recordBrands[0]]?.name : '',
      brandSlug: recordBrands.length > 0 ? brands[recordBrands[0]]?.slug : '',
      category: recordCategories
        .map((catId) => categories[catId]?.name)
        .filter((name) => !!name) as string[],
      categorySlugs: record.fields.categorySlugs as string[],
      ageGroups: recordAgeGroups
        .map((catId) => ageGroups[catId]?.name)
        .filter((name) => !!name) as string[],
      ageGroupSlugs: record.fields.ageGroupsSlugs as string[],
      tag: recordTags
        .map((catId) => tags[catId]?.name)
        .filter((name) => !!name) as string[],
      tagSlugs: (record.fields.tagSlugs as string[]) || [],
      price: record.fields.price as number,
      url: record.fields.url as string,
      isAffiliate: record.fields.isAffiliate as boolean,
      image: record.fields.image as string,
    }

    return product
  })
}

export const getProductsBySlug = cache(
  async (
    categorySlugs: string[] = [],
    ageGroupSlugs: string[] = [],
    tagSlugs: string[] = [],
    limit?: number
  ): Promise<Product[]> => {
    const allProducts = await getProducts()

    // Filter products based on category and age group slugs
    const filteredProducts = allProducts.filter((product) => {
      // Check if any category, tag, or age group is provided
      const shouldFilter =
        categorySlugs.length > 0 ||
        ageGroupSlugs.length > 0 ||
        tagSlugs.length > 0

      if (!shouldFilter) {
        // If no filtering is required, include all products
        return true
      }

      const productCategorySet = new Set(product.categorySlugs)
      const productAgeGroupSet = new Set(product.ageGroupSlugs)
      const productTagSet = new Set(product.tagSlugs)

      const matchesCategory =
        categorySlugs.length === 0 ||
        categorySlugs.every((slug) => productCategorySet.has(slug))

      const matchesTag =
        tagSlugs.length === 0 ||
        tagSlugs.some((slug) => productTagSet.has(slug))

      const matchesAgeGroup =
        ageGroupSlugs.length === 0 ||
        ageGroupSlugs.some((slug) => productAgeGroupSet.has(slug))

      return matchesCategory && matchesAgeGroup && matchesTag
    })

    const limitedProducts = limit
      ? filteredProducts.slice(0, limit)
      : filteredProducts

    return limitedProducts
  }
)

export async function getProductsOnly(): Promise<Product[]> {
  const productTable = base('Products')
  const records = await productTable
    .select({
      filterByFormula: 'AND(isPublished, {isPublished} = TRUE())',
      sort: [{ field: 'created', direction: 'desc' }],
      view: 'Grid view',
    })
    .all() // Modify your select query as needed

  return records.map((record) => {
    // We assume that record.fields conforms to the shape of Product, except for the id field
    const { id, ...fields } = record.fields as Product & { id: string }
    return {
      id: record.id,
      ...fields,
    }
  })
}
