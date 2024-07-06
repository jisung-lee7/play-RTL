import './App.css'
import Hello from './component/Hello'
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
    </div>
  )
}

export default App
