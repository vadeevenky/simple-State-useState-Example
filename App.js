import React from "react";
import Test from "./components/Test";

function App() {
  const users = [
    { name: "hari", job: "govt emplyoee" },
    { name: "venkatesh", job: "software employee" },
  ];
  return (
    <div>
      {/* <Test name={users[0].name} job={users[0].job}></Test>
      <Test name={users[1].name} job={users[1].job}></Test> */}
      {users.map((user) => (
        <Test job={user.job} name={user.name} />
      ))}
    </div>
  );
}

export default App;
