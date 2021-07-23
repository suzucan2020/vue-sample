/* eslint-disable import/named NuxtのCompositionAPIの場合書かないとerrorになる為*/
import { InjectionKey } from '@nuxtjs/composition-api'

// ↓これはuseCounterで型をexportしたものです
import { CounterStore } from '~/composition/useCounter'

export const CounterKey: InjectionKey<CounterStore> = Symbol('CounterStore')
