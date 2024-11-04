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
  route: string
}

export type Item = {
  title: string
  route?: string
  subItems?: SubItem[]
}

export type Section = {
  title: string
  route: string
  items?: Item[]
}

export const getAllRoutes = (menuData: Section[]) => {
  const routes: string[] = []

  const collectRoutes = (items: Item[]) => {
    items.forEach((item) => {
      if (item.route) {
        routes.push(item.route)
      }
      if (item.subItems) {
        item.subItems.forEach((subItem) => {
          if (subItem.route) {
            routes.push(subItem.route)
          }
        })
      }
    })
  }

  menuData.forEach((section) => {
    if (section.route) {
      routes.push(section.route)
    }
    if (section.items) {
      collectRoutes(section.items)
    }
  })

  return routes
}
