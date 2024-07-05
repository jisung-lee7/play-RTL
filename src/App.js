import './App.css'
import Hello from './component/Hello'

function App() {
  const user = {
    name: 'Jisung',
    age: 30
  }

  return (
    <div className="App">
      <Hello user={user} />
    </div>
  )
}

export default App
