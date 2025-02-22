import { NumberInput as NumberInputRoot, type NumberInputProps } from './number-input'
import { useNumberInputContext, type NumberInputContext } from './number-input-context'
import { NumberInputControl, type NumberInputControlProps } from './number-input-control'
import {
  NumberInputDecrementTrigger,
  type NumberInputDecrementTriggerProps,
} from './number-input-decrement-trigger'
import {
  NumberInputIncrementTrigger,
  type NumberInputIncrementTriggerProps,
} from './number-input-increment-trigger'
import { NumberInputInput, type NumberInputInputProps } from './number-input-input'
import { NumberInputLabel, type NumberInputLabelProps } from './number-input-label'
import { NumberInputScrubber, type NumberInputScrubberProps } from './number-input-scrubber'

const NumberInput = Object.assign(NumberInputRoot, {
  Root: NumberInputRoot,
  Control: NumberInputControl,
  DecrementTrigger: NumberInputDecrementTrigger,
  Input: NumberInputInput,
  IncrementTrigger: NumberInputIncrementTrigger,
  Label: NumberInputLabel,
  Scrubber: NumberInputScrubber,
})

export {
  NumberInput,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputScrubber,
  useNumberInputContext,
}

export type {
  NumberInputContext,
  NumberInputControlProps,
  NumberInputDecrementTriggerProps,
  NumberInputIncrementTriggerProps,
  NumberInputInputProps,
  NumberInputLabelProps,
  NumberInputProps,
  NumberInputScrubberProps,
}
