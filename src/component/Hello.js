export default function Hello({ user }) {
  return (
    <div>
      {user?.name ? <h1>Hello! {user.name}</h1> : <button>Login</button>}
    </div>
  )
}
