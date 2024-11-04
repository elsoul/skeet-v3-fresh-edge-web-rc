import { asset } from 'fresh/runtime'
import { define } from '@/utils/state.ts'
import { appInfo } from '@/config.ts'
import { defaultDarkModeScript } from 'fresh-theme'
import { createTranslator } from 'fresh-i18n'

export default define.page(function App({ Component, state, url }) {
  const t = createTranslator(state.translationData)
  return (
    <html
      lang={`${state.locale ? state.locale : 'en'}`}
    >
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&family=Noto+Sans+JP:wght@300;500;700&display=swap'
          rel='stylesheet'
        />
        <script dangerouslySetInnerHTML={{ __html: defaultDarkModeScript }} />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {state.title
          ? <title>{`${t(state.title)} | ${t('metadata.appTitle')}`}</title>
          : null}
        {state.description
          ? <meta name='description' content={t(state.description)} />
          : null}
        <meta name='application-name' content={t('metadata.appTitle')} />
        <meta name='generator' content={appInfo.copyright} />
        <meta name='keywords' content={t('metadata.keywords')} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={url.href} />
        {state.title
          ? (
            <meta
              property='og:title'
              content={`${t(state.title)} | ${t('metadata.appTitle')}`}
            />
          )
          : null}
        {state.description
          ? <meta property='og:description' content={t(state.description)} />
          : null}
        {state.ogImage
          ? <meta property='og:image' content={state.ogImage} />
          : null}
        {state.ogImage
          ? <meta property='og:image:type' content={'image/jpeg'} />
          : null}
        {state.ogImage
          ? <meta property='og:image:width' content={'1200'} />
          : null}
        {state.ogImage
          ? <meta property='og:image:height' content={'630'} />
          : null}
        {state.title
          ? (
            <meta
              property='og:image:alt'
              content={`${t(state.title)} | ${t('metadata.appTitle')}`}
            />
          )
          : null}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={appInfo.twitterId} />
        <meta name='twitter:creator' content={appInfo.twitterId} />
        {state.title
          ? (
            <meta
              name='twitter:title'
              content={`${t(state.title)} | ${t('metadata.appTitle')}`}
            />
          )
          : null}
        {state.description
          ? <meta name='twitter:description' content={t(state.description)} />
          : null}
        {state.ogImage
          ? <meta name='twitter:image' content={state.ogImage} />
          : null}
        {state.ogImage
          ? <meta name='twitter:image:type' content={'image/jpeg'} />
          : null}
        {state.ogImage
          ? <meta name='twitter:image:width' content={'1200'} />
          : null}
        {state.ogImage
          ? <meta name='twitter:image:height' content={'630'} />
          : null}
        {state.title
          ? (
            <meta
              name='twitter:image:alt'
              content={`${t(state.title)} | ${t('metadata.appTitle')}`}
            />
          )
          : null}
        {state.noIndex
          ? <meta name='robots' content='noindex' />
          : <meta name='robots' content='index follow' />}
        <link
          rel='icon'
          href={asset('/favicon.ico')}
          type='image/x-icon'
          sizes='48x48'
        />
        <link
          rel='icon'
          href={asset('/logo.svg')}
          type='image/svg+xml'
          sizes='any'
        />
        <link
          rel='apple-touch-icon'
          href={asset('/apple-icon.png')}
          type='image/png'
          sizes='2048x2048'
        />
        <link rel='stylesheet' href={asset('/styles.css')} />
        <link rel='stylesheet' href={asset('/prism.css')} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  )
})
