export type THomeMenuState = 'active' | 'disabled' | 'comming-soon'

export interface IHomeMenu {
  label: string
  state: THomeMenuState
  url: string
}
