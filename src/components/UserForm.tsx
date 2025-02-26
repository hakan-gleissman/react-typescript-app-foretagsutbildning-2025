import { useState } from "react";

type User = {
  name: string;
  birthYear: string;
};

const UserForm = () => {
  const [user, setUser] = useState<User>({ name: "", birthYear: "" });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ name: e.target.value, birthYear: user.birthYear });
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ name: user.name, birthYear: e.target.value });
  };

  return (
    <div>
      <input type="text" name="name" value={user.name} onChange={handleNameChange} placeholder="Namn"/>
      <input type="text" name="birthYear" value={user.birthYear} onChange={handleYearChange} placeholder="Födelseår"/>
      <p>Namn: {user.name}, Födelseår: {user.birthYear}</p>
    </div>
  );
};
export default UserForm;