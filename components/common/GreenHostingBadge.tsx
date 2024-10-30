import { appInfo } from '@/config.ts'

export default function GreenHostingBadge() {
  return (
    <>
      <a
        href={`https://www.thegreenwebfoundation.org/green-web-check/?url=https://${appInfo.domain}/`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={`https://app.greenweb.org/api/v3/greencheckimage/${appInfo.domain}?nocache=true`}
          alt='This website runs on green hosting - verified by thegreenwebfoundation.org'
          width={200}
          height={95}
        />
      </a>
    </>
  )
}
