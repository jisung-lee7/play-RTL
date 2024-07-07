import { render, screen } from '@testing-library/react'
import UserList from './UserList'

describe('UserList test', () => {
  const users = ['Jisung', 'Jenny', 'Tom']

  test('The title will appear shortly.', async () => {
    render(<UserList users={users} />)
    // screen.debug()
    expect(
      await screen.findByRole(
        'heading',
        { name: 'user list' },
        { timeout: 2000 }
      )
    ).toBeInTheDocument()
    // screen.debug()
  })

  test('ul is valid', () => {
    render(<UserList users={users} />)
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  test('Are there three li elements?', () => {
    render(<UserList users={[]} />)
    // expect(screen.getAllByRole('listitem')).toHaveLength(users.length)
    expect(screen.queryAllByRole('listitem')).toHaveLength(0) // if arr []
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument() // if arr []
  })
})
