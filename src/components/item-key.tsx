
function ItemKey() {
  const students = ["sheetal", "mahesh", "satya", "avinash"];
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
    },
    {
      id: 2,
      name: "Bob Smith",
      age: 34,
      email: "bob.smith@example.com",
    },
    {
      id: 3,
      name: "Charlie Brown",
      age: 22,
      email: "charlie.brown@example.com",
    },
    {
      id: 4,
      name: "Diana Patel",
      age: 30,
      email: "diana.patel@example.com",
    },
    {
      id: 5,
      name: "Ethan Lee",
      age: 26,
      email: "ethan.lee@example.com",
    },
  ];

  return (
    <div>
      <h3>user name list</h3>
      <ul>
        {students.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3>users list</h3>
      <table>
        <thead>
          <tr><td>  ID</td>
            <td> NAME</td><td>AGE</td><td>EMAIL</td></tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ItemKey;
