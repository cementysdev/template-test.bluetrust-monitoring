import { useEffect } from "react";
import { userService } from "./api/user.service";


function App() {
  const fetchUsers = async () => {
    const users = await userService.getAll();
    console.log(users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return <p>Technical test</p>;
}

export default App;
