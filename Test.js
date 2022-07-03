import { useState } from "react";

function Test(props) {
  const [name, setName] = useState(props.name);
  console.log(" test component evalated");

  const nameHandler = () => {
    setName("updated");
    console.log(name);
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={nameHandler}> change Name</button>
    </div>
  );
}

export default Test;
