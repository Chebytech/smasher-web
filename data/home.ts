import type { IHomeMenu } from '~/types/home'

export const MENUS: IHomeMenu[] = [
  {
    label: 'Cari Lapangan',
    state: 'active',
    url: '/search/court',
  },
  {
    label: 'Scoring',
    state: 'comming-soon',
    url: '/scoring',
  },
]
