import React from 'react'
import { render } from '@testing-library/react'
import Timer from './Timer'

test('show seconds', () => {
  Date.now = jest.fn(() => 123456789)
  const view = render(<Timer />)
  expect(view).toMatchSnapshot()
})
