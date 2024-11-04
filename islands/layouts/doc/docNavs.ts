import { Section } from '@/utils/posts.ts'

export const docMenuData: Section[] = [
  {
    title: 'doc.nav.general.getting-started',
    path: '/doc/general/getting-started',
    items: [
      {
        title: 'doc.nav.general.installation',
        path: '/doc/general/installation',
      },
      {
        title: 'doc.nav.general.project-structure',
        path: '/doc/general/project-structure',
      },
    ],
  },
  {
    title: 'doc.nav.building-your-application.title',
    path: '/doc/building-your-application/menu',
    items: [
      {
        title: 'doc.nav.building-your-application.api.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.api.http',
            path: '/doc/building-your-application/api/http',
          },
          {
            title: 'doc.nav.building-your-application.api.rpc',
            path: '/doc/building-your-application/api/rpc',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.worker.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.worker.cron',
            path: '/doc/building-your-application/worker/cron',
          },
          {
            title: 'doc.nav.building-your-application.worker.queue',
            path: '/doc/building-your-application/worker/queue',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.frontend.title',
        subItems: [
          {
            title: 'doc.nav.building-your-application.frontend.ssg',
            path: '/doc/building-your-application/frontend/ssg',
          },
          {
            title: 'doc.nav.building-your-application.frontend.webapp',
            path: '/doc/building-your-application/frontend/webapp',
          },
          {
            title: 'doc.nav.building-your-application.frontend.solana',
            path: '/doc/building-your-application/frontend/solana',
          },
        ],
      },
      {
        title: 'doc.nav.building-your-application.cli.title',
        path: '/doc/building-your-application/cli/main',
      },
    ],
  },
]
