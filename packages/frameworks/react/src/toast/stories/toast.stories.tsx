import type { Meta } from '@storybook/react'
import { Toast, createToaster } from '../'
import './toast.css'

type ToastType = typeof Toast

const meta: Meta<ToastType> = {
  title: 'Toast',
  component: Toast,
}
export default meta

export const Basic = () => {
  const [Toaster, toast] = createToaster({
    placement: 'top-end',
    render(toast) {
      return (
        <Toast.Root>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger>Close</Toast.CloseTrigger>
        </Toast.Root>
      )
    },
  })

  return (
    <>
      <button onClick={() => toast.create({ title: 'Title', description: 'Description' })}>
        Toast
      </button>
      <Toaster />
    </>
  )
}

export const Customized = () => {
  const [Toaster, toast] = createToaster({
    placement: 'bottom-start',
    render(toast) {
      return (
        <Toast.Root>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger>Close</Toast.CloseTrigger>
        </Toast.Root>
      )
    },
  })

  return (
    <>
      <button
        onClick={() =>
          toast.create({
            title: 'Success',
            description: 'This is a success toast',
            type: 'success',
            duration: 20000,
            removeDelay: 250,
          })
        }
      >
        Toast
      </button>
      <Toaster />
    </>
  )
}

export const CustomRender = () => {
  const [Toaster, toast] = createToaster({
    placement: 'top-end',
    // custom render may go directly into the function below
    render(toast) {
      return (
        <Toast.Root>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Description>{toast.description}</Toast.Description>
          <Toast.CloseTrigger>Close</Toast.CloseTrigger>
        </Toast.Root>
      )
    },
  })

  return (
    <>
      <button
        onClick={() =>
          toast.create({
            title: 'Please checkout',
            render: (toast) => (
              <div>
                {toast.title} <a href="https://ark-ui.com">Ark UI</a>
              </div>
            ),
          })
        }
      >
        Toast
      </button>
      <Toaster />
    </>
  )
}
