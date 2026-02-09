export default function Wrapper({ title, users }) {
  return (
    <div>
      <h2>{title}</h2>
      {users.map((u, index) => (
        <div key={index}>
          <p>{u.name}</p>
          <p>{u.role}</p>
          <p>{u.country}</p>
        </div>
      ))}
    </div>
  );
}
