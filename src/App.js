import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setuserData(data);
      });
  }, []);
  return (
    <div className="App">
      <div className="userlist">
        <table>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Company</td>
            <td>Address</td>
          </tr>
          {userData.map((user) => (
            <tr>
              <td>{user.name.split(" ")[0]}</td>
              <td>{user.name.split(" ")[1]}</td>
              <td>{user.company.name}</td>
              <td>
                {user.address.suite} , {user.address.street} ,{" "}
                {user.address.zipcode}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
