import './App.css'
import Hello from './component/Hello'
import MyPage from './component/MyPage'
import Timer from './component/Timer'

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
    </div>
  )
}

export default App
