import { join } from '@std/path'

type GetPostProps = {
  kind: string
  slug: string
  locale: string
}

export async function getPost(
  { kind, slug, locale }: GetPostProps,
) {
  try {
    return await Deno.readTextFile(
      join('posts', kind, locale, `${slug}.md`),
    )
  } catch {
    return null
  }
}

export type SubItem = {
  title: string
  path: string
}

export type Item = {
  title: string
  path?: string
  subItems?: SubItem[]
}

export type Section = {
  title: string
  path: string
  items?: Item[]
}

export const getAllPaths = (menuData: Section[]) => {
  const paths: { path: string; title: string }[] = []

  const collectPaths = (items: Item[]) => {
    items.forEach((item) => {
      if (item.path) {
        paths.push({ path: item.path, title: item.title })
      }
      if (item.subItems) {
        item.subItems.forEach((subItem) => {
          if (subItem.path) {
            paths.push({ path: subItem.path, title: subItem.title })
          }
        })
      }
    })
  }

  menuData.forEach((section) => {
    if (section.path) {
      paths.push({ path: section.path, title: section.title })
    }
    if (section.items) {
      collectPaths(section.items)
    }
  })

  return paths
}
