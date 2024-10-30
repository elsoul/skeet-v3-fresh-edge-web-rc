import { appInfo } from '@/config.ts'
import { Discord, Github, X, Youtube } from 'iconoir-react'
import { basicTextColor } from '@/components/utils/tailwinds.ts'
import { cn } from '@/lib/utils.ts'

export function GithubIconLink() {
  return (
    <a
      href={`https://github.com/${appInfo.githubRepo}`}
      class='hover:opacity-70'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Github class={cn('h-5 w-5', basicTextColor)} />
    </a>
  )
}

export function TwitterIconLink() {
  return (
    <a
      href={`https://x.com/${appInfo.twitterId}`}
      class='hover:opacity-70'
      rel='noopener noreferrer'
      target='_blank'
    >
      <X class={cn('h-5 w-5', basicTextColor)} />
    </a>
  )
}

export function DiscordIconLink() {
  return (
    <a
      href={`${appInfo.discordInviteURL}`}
      class='hover:opacity-70'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Discord class={cn('h-5 w-5', basicTextColor)} />
    </a>
  )
}

export function YouTubeIconLink() {
  return (
    <a
      href={`https://youtube.com/${appInfo.youtubeAccount}`}
      class='hover:opacity-70'
      rel='noopener noreferrer'
      target='_blank'
    >
      <Youtube class={cn('h-5 w-5', basicTextColor)} />
    </a>
  )
}
