/* eslint-disable @typescript-eslint/no-explicit-any */
import { observable, makeObservable, action } from 'mobx'
import { isSafari } from '../utils'

export interface TLSettingsProps {
  mode: 'light' | 'dark'
  showGrid: boolean
}

export class TLSettings implements TLSettingsProps {
  constructor() {
    makeObservable(this)
  }

  @observable mode: 'dark' | 'light' = 'light'
  @observable showGrid = true

  @action update(props: Partial<TLSettingsProps>): void {
    Object.assign(this, props)
  }
}
