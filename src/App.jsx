import Wrapper from "./Wrapper";

export default function App() {
  const user = [
    { name: "virat kohli", role: "batsman", country: "india" },
    { name: "rohit sharma", role: "bowler", country: "india" }
  ];

  return (
    <div>
      <h1>USER DASHBOARD</h1>
      <Wrapper title="User List" users={user} />
    </div>
  );
}
