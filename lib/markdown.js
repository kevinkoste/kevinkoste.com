import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export const getItemSlugs = (directory) => {
  const itemsDirectory = join(process.cwd(), directory)
  return fs.readdirSync(itemsDirectory)
}

export const getAllItems = (directory) => {
  const itemsDirectory = join(process.cwd(), directory)
  const slugs = fs.readdirSync(itemsDirectory)

  const items = slugs
    .map((slug) => {
      const realSlug = slug.replace(/\.md$/, '')
      const fullPath = join(itemsDirectory, `${realSlug}.md`)
      const { data, content } = matter.read(fullPath)
      data.slug = realSlug
      return { data, content }
    })
    .sort((item1, item2) => (item1.data.date > item2.data.date ? '-1' : '1'))

  return items
}

export const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
