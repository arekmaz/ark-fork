import * as popover from '@zag-js/popover'
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/vue'
import { computed, ref, type ComputedRef } from 'vue'
import { useEnvironmentContext } from '../environment'
import type { Optional } from '../types'
import { useId } from '../utils'

export interface UsePopoverProps extends Optional<popover.Context, 'id'> {
  modelValue?: popover.Context['open']
}

export interface UsePopoverReturn extends ComputedRef<popover.Api<PropTypes>> {}

export const usePopover = (props: UsePopoverProps, emit: CallableFunction) => {
  const getRootNode = useEnvironmentContext()
  const context = ref(props)

  const [state, send] = useMachine(
    popover.machine({
      ...context.value,
      id: context.value.id || useId().value,
      getRootNode,
      onOpenChange: (details) => {
        emit('open-change', details)
        emit('update:modelValue', details.open)
      },
      onEscapeKeyDown: (details) => {
        emit('escape-key-down', details)
      },
      onFocusOutside: (details) => {
        emit('focus-outside', details)
      },
      onInteractOutside: (details) => {
        emit('interact-outside', details)
      },
      onPointerDownOutside: (details) => {
        emit('pointer-down-outside', details)
      },
    }),
    { context },
  )

  return computed(() => popover.connect(state.value, send, normalizeProps))
}
