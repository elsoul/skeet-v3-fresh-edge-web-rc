import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-typescript.js'
import 'prismjs/components/prism-tsx.js'
import 'prismjs/components/prism-diff.js'
import 'prismjs/components/prism-json.js'
import 'prismjs/components/prism-bash.js'
import 'prismjs/components/prism-yaml.js'

export { extractYaml as frontMatter } from '@std/front-matter'

import * as Marked from 'marked'
import { escape as escapeHtml } from '@std/html'
import { mangle } from 'marked-mangle'
import GitHubSlugger from 'github-slugger'
import { getYouTubeVideoId, isYouTubeUrl } from '@/lib/utils.ts'

const slugger = new GitHubSlugger()

Marked.marked.use(mangle())

export interface MarkdownHeading {
  id: string
  html: string
  depth: number
}

class DefaultRenderer extends Marked.Renderer {
  headings: MarkdownHeading[] = []

  override text(
    token: Marked.Tokens.Text | Marked.Tokens.Escape | Marked.Tokens.Tag,
  ): string {
    if (
      token.type === 'text' && 'tokens' in token && token.tokens !== undefined
    ) {
      return this.parser.parseInline(token.tokens)
    }

    return token.text
      .replace(/\.{3}/g, '&#8230;')
      .replace(/--/g, '&#8212;')
      .replace(/"([^"]*?)"/g, '&#8220;$1&#8221;')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/'([^']*?)'/g, '&#8216;$1&#8217;')
  }

  override heading({
    tokens,
    depth,
    raw,
  }: Marked.Tokens.Heading): string {
    const slug = slugger.slug(raw)
    const text = this.parser.parseInline(tokens)
    this.headings.push({ id: slug, html: text, depth })
    return `<h${depth} id="${slug}" class="tracking-tight">${text}</h${depth}>`
  }

  override link({ href, title, tokens }: Marked.Tokens.Link) {
    const isYouTube = isYouTubeUrl(href)
    const videoId = getYouTubeVideoId(href)
    if (isYouTube && videoId) {
      return `<iframe src="https://www.youtube.com/embed/${videoId}" allowFullScreen class="rounded-lg youtube"></iframe>`
    }

    const text = this.parser.parseInline(tokens)
    const titleAttr = title ? ` title="${title}"` : ''

    if (href.startsWith('#')) {
      return `<a href="${href}"${titleAttr} class="break-words">${text}</a>`
    }

    return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer" class="hover:opacity-70 break-words">${text}</a>`
  }

  override image({ href, text, title }: Marked.Tokens.Image) {
    return `<img src="${href}" alt="${text ?? ''}" title="${
      title ?? ''
    }" class="w-full rounded-lg" />`
  }

  override code({ lang: info, text }: Marked.Tokens.Code): string {
    let lang = ''
    let title = ''
    const match = info?.match(/^([\w_-]+)\s*(.*)?$/)
    if (match) {
      lang = match[1].toLocaleLowerCase()
      title = match[2] ?? ''
    }

    let out = `<div class="w-full mb-2">`

    if (title) {
      out += `<div class="rounded-t-xl w-full overflow-x-auto scrollbar-none">
      <span class="lang-${lang}">
        ${title ? escapeHtml(String(title)) : '&nbsp;'}
      </span>
    </div>`
    }

    const grammar = lang && Object.hasOwnProperty.call(Prism.languages, lang)
      ? Prism.languages[lang]
      : undefined

    if (grammar === undefined) {
      out += `<pre><code class="notranslate">${escapeHtml(text)}</code></pre>`
    } else {
      const html = Prism.highlight(text, grammar, lang)
      out +=
        `<pre class="highlight highlight-source-${lang} notranslate lang-${lang} p-2 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-white scrollbar-thumb-zinc-300 dark:scrollbar-track-zinc-950 dark:scrollbar-thumb-zinc-600"><code>${html}</code></pre>`
    }

    out += `</div>`
    return out
  }
}

export interface MarkdownOptions {
  inline?: boolean
}
export function renderMarkdown(
  input: string,
  opts: MarkdownOptions = {},
): { headings: MarkdownHeading[]; html: string } {
  const renderer = new DefaultRenderer()
  const markedOpts: Marked.MarkedOptions = {
    gfm: true,
    renderer,
  }

  const html = opts.inline
    ? Marked.parseInline(input, markedOpts) as string
    : Marked.parse(input, markedOpts) as string

  return { headings: renderer.headings, html }
}
