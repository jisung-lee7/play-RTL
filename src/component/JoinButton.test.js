import { render, screen } from '@testing-library/react'
import JoinButton from './JoinButton'

test('If you are 19 years old or younger, you cannot click the button, and the message is displayed in red.', () => {
  render(<JoinButton age={10} />)
  expect(screen.getByRole('button')).toBeInTheDocument()
  expect(screen.getByRole('button')).toBeDisabled()
  expect(screen.getByRole('heading')).toBeInTheDocument()
  expect(screen.getByRole('heading')).toHaveStyle({ color: 'red' })
})

test('If you are adult, you can click the button, and the message is displayed in white.', () => {
  render(<JoinButton age={30} />)
  expect(screen.getByRole('button')).toBeInTheDocument()
  expect(screen.getByRole('button')).toBeEnabled()
  expect(screen.getByRole('heading')).toBeInTheDocument()
  expect(screen.getByRole('heading')).toHaveStyle({ color: 'white' })
})
