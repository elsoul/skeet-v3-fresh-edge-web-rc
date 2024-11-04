import { join } from '@std/path'
import { frontMatter } from '@/utils/markdown.ts'

export interface DatePost {
  title: string
  thumbnail: string
  path: string
  date: string
}

export interface DatePosts {
  [key: string]: DatePost[]
}

export interface DatePostsConfig {
  kind: string
  path: string
  exportPath: string
  languages: string[]
}

/**
 * Generates a date-based posts index for the specified configuration.
 * @param config - Configuration object including path, exportPath, languages, and kind.
 * @returns void
 */
export async function generateDatePostsIndex(config: DatePostsConfig) {
  const { path, exportPath, languages, kind } = config
  const datePosts: DatePosts = {}

  for (const language of languages) {
    datePosts[language] = []
  }

  for await (const langDir of Deno.readDir(path)) {
    if (!langDir.isDirectory || !languages.includes(langDir.name)) continue
    const language = langDir.name

    for await (const yearDir of Deno.readDir(join(path, language))) {
      if (!yearDir.isDirectory) continue

      for await (
        const monthDir of Deno.readDir(join(path, language, yearDir.name))
      ) {
        if (!monthDir.isDirectory) continue

        for await (
          const dayDir of Deno.readDir(
            join(path, language, yearDir.name, monthDir.name),
          )
        ) {
          if (!dayDir.isDirectory) continue

          for await (
            const file of Deno.readDir(
              join(
                path,
                language,
                yearDir.name,
                monthDir.name,
                dayDir.name,
              ),
            )
          ) {
            if (file.isFile && file.name.endsWith('.md')) {
              const filePath = join(
                path,
                language,
                yearDir.name,
                monthDir.name,
                dayDir.name,
                file.name,
              )
              const content = await Deno.readTextFile(filePath)
              const { attrs } = frontMatter<Record<string, string>>(content)

              const title = attrs.title || 'Untitled'
              const thumbnail = attrs.thumbnail || 'ogp.jpg'

              const slug = file.name.replace('.md', '')
              const postPath =
                `/${kind}/${yearDir.name}/${monthDir.name}/${dayDir.name}/${slug}`
              const date = `${yearDir.name}-${monthDir.name}-${dayDir.name}`

              datePosts[language].push({
                title,
                thumbnail,
                path: postPath,
                date,
              })
            }
          }
        }
      }
    }
  }

  for (const language of languages) {
    datePosts[language].sort((a, b) => b.date.localeCompare(a.date))
  }

  const exportName = `${kind}Posts`
  const tsContent = `export const ${exportName} = ${
    JSON.stringify(
      datePosts,
      null,
      2,
    )
  };`

  // Check if the content has changed
  try {
    const existingContent = await Deno.readTextFile(exportPath)
    if (existingContent === tsContent) {
      console.log(`No changes detected in ${exportPath}, skipping write.`)
      return
    }
  } catch {
    // If file does not exist, proceed to write new content
  }

  await Deno.writeTextFile(exportPath, tsContent)
  console.log(`Date-based posts index file generated at ${exportPath}`)

  if (Deno.env.get('DENO_ENV') === 'development') {
    watchDatePostsFiles(config)
  }
}

/**
 * Watches the specified path for changes and regenerates the date-based posts index.
 * @param config - Configuration object including path, exportPath, languages, and kind.
 */
export async function watchDatePostsFiles(config: DatePostsConfig) {
  const watcher = Deno.watchFs(config.path)
  console.log('Watching for changes in date-based posts files...')

  for await (const event of watcher) {
    if (['create', 'modify', 'remove'].includes(event.kind)) {
      console.log('Detected date-based post file change, regenerating index...')
      await generateDatePostsIndex(config)
    }
  }
}
