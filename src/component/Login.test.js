import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Login from './Login'

describe('Login test', () => {
  test('Initially, there is a login button.', () => {
    render(<Login />)
    expect(screen.getByRole('button')).toHaveTextContent('Login')
  })
})

const user = userEvent.setup()

test('After one click, it becomes a logout button.', async () => {
  render(<Login />)
  await user.click(screen.getByRole('button'))
  expect(screen.getByRole('button')).toHaveTextContent('Logout')
})

test('tab, space, enter test', async () => {
  render(<Login />)
  await user.tab()
  await user.keyboard(' ')
  await user.keyboard(' ')
  await user.keyboard('{Enter}')
  expect(screen.getByRole('button')).toHaveTextContent('Logout')
})
