export default function MyPage() {
  return (
    <div>
      <div>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="profile">Introduce</label>
        <textarea id="profile" />
      </div>
      <div data-testid="my-div" />
      <div>
        <label htmlFor="subname">SubName</label>
        <input type="text" id="subname" value="Tom" readOnly />
      </div>
    </div>
  )
}
