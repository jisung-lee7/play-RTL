import { render, screen } from '@testing-library/react'
import MyPage from './MyPage'

test('They have input element', () => {
  render(<MyPage />)
  expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument()
  expect(screen.getByRole('textbox', { name: 'Introduce' })).toBeInTheDocument()
  expect(screen.getByDisplayValue('Tom')).toBeInTheDocument()
  expect(screen.getByLabelText('Introduce')).toBeInTheDocument()
  expect(screen.getByTestId('my-div')).toBeInTheDocument()
  expect(
    screen.getByLabelText('Introduce', {
      selector: 'textarea'
    })
  ).toBeInTheDocument()
})
