import { render, screen } from '@testing-library/react'
import TodoList from './TodoList'

describe('Todo List', () => {
  test('There is title Todo', () => {
    render(<TodoList />)
    expect(screen.getByText('Todo')).toBeInTheDocument()
  })
})
