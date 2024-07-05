import { render, screen } from '@testing-library/react'
import Hello from './Hello'

// render, screen
{
  const user = {
    name: 'Jisung',
    age: 30
  }

  test("If doesn't have user, show Login button", () => {
    render(<Hello />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test('Does the word show Hello?', () => {
    render(<Hello user={user} />)
    const helloEl = screen.getByText(`Hello! ${user.name}`)
    expect(helloEl).toBeInTheDocument()
  })

  test("If deosn't have user.name, show Login button", () => {
    render(<Hello user="Jisung" />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
}

// snapshot
{
  const user = {
    name: 'Jisung',
    age: 30
  }

  const user2 = {
    age: 20
  }

  test('snapshot : name is valid', () => {
    const view = render(<Hello user={user} />)
    expect(view).toMatchSnapshot()
  })

  test('snapshot : name is invalid', () => {
    const view = render(<Hello />)
    expect(view).toMatchSnapshot()
  })
}
