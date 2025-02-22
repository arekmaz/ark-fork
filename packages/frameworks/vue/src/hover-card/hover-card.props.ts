import type { Context } from '@zag-js/hover-card'
import type { PropType } from 'vue'
import { declareEmits } from '../utils'

export const props = {
  closeDelay: {
    type: Number as PropType<Context['closeDelay']>,
  },
  dir: {
    type: String as PropType<Context['dir']>,
  },
  getRootNode: {
    type: Function as PropType<Context['getRootNode']>,
  },
  id: {
    type: String as PropType<Context['id']>,
  },
  ids: {
    type: Object as PropType<Context['ids']>,
  },
  open: {
    type: Boolean as PropType<Context['open']>,
    default: undefined,
  },
  openDelay: {
    type: Number as PropType<Context['openDelay']>,
  },
  positioning: {
    type: Object as PropType<Context['positioning']>,
  },
  modelValue: {
    type: Boolean as PropType<Context['open']>,
    default: undefined,
  },
}
export const emits = declareEmits(['open-change', 'update:modelValue'])
