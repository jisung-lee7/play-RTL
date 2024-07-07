import './App.css'
import Hello from './component/Hello'
import MyPage from './component/MyPage'
import Timer from './component/Timer'
import UserList from './component/UserList'

function App() {
  const user = {
    name: 'Jisung',
    age: 30
  }

  return (
    <div className="App">
      <Hello user={user} />
      <Timer />
      <MyPage />
      <UserList users={['Jisung', 'Jenny', 'Tom']} />
    </div>
  )
}

export default App
