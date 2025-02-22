import { avatarAnatomy } from '@ark-ui/anatomy'
import { render } from '@testing-library/vue'
import { Avatar } from '../'
import { getExports, getParts } from '../../setup-test'
import ComponentUnderTest from './avatar.test.vue'

describe('Avatar', () => {
  it.each(getParts(avatarAnatomy))('should render part %s', async (part) => {
    render(ComponentUnderTest)
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector(part)).toBeInTheDocument()
  })

  it.each(getExports(avatarAnatomy))('should export %s', async (part) => {
    expect(Avatar[part]).toBeDefined()
  })
})
