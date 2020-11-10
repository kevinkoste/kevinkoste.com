import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export const getItemSlugs = (directory) => {
  const itemsDirectory = join(process.cwd(), directory)
  return fs.readdirSync(itemsDirectory)
}

export const getItemBySlug = (directory, slug) => {
  const itemsDirectory = join(process.cwd(), directory)
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(itemsDirectory, `${realSlug}.md`)
  const { data, content } = matter.read(fullPath)
  const metadata = data
  metadata.slug = realSlug
  return { metadata, content }
}

export const getAllItems = (directory) => {
  const itemsDirectory = join(process.cwd(), directory)
  const slugs = fs.readdirSync(itemsDirectory)

  const items = slugs
    .map((slug) => getItemBySlug(directory, slug))
    .sort((item1, item2) =>
      item1.metadata.date > item2.metadata.date ? '-1' : '1'
    )

  return items
}

export const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
