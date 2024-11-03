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
