export default function Timer() {
  const now = Date.now()
  const sec = new Date(now).getSeconds()
  return <p>It is currently {sec}</p>
}
