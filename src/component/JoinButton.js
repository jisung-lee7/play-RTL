export default function JoinButton({ age }) {
  return (
    <>
      <button disabled={age < 19}></button>{' '}
      {age < 19 ? (
        <h3 style={{ color: 'red' }}>Only adults can sign up.</h3>
      ) : (
        <h3 style={{ color: 'white' }}>You can sign up.</h3>
      )}
    </>
  )
}
