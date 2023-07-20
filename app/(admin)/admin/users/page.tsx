const dummyUsersData = [
  {id: 1, name: "John Doe", email: "john.doe@email.com", role: "admin"},
  {id: 2, name: "Jane Doe", email: "jane.doe@email.com", role: "manager"},
  {id: 3, name: "John Smith", email: "smith@gmail.com", role: "user"},
  {id: 4, name: "Jane Smith", email: "jane.smith@hey.com", role: "user"},
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 widget">
        <div>
          <b>Name</b>
        </div>
        <div>
          <b>Email</b>
        </div>
        <div>
          <b>Role</b>
        </div>
        {dummyUsersData.map((user) => (
          <div key={user.id} className="contents">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
