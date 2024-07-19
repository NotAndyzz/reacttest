import { useEffect, useState } from "react";
import axios from "axios";

function GetUserData() {
  //   fetch("https://randomuser.me/api/").then((res) =>
  //     res.json().then((data) => console.log(data))
  //   );

  const [userData, setUserData] = useState<Array<any>>([]);

  async function showData() {
    let user: Array<any>;
    await axios.get("https://randomuser.me/api/").then((response) => {
      console.log(response.data.results[0]);
      user = response.data.results;
      setUserData(user);
    });
  }

  return (
    <div>
      <button onClick={() => showData()}>CLICK MEEEEEEEEEE</button>
      <div>
        {userData.map((user) => (
          <div key={user.id.value}>{user.gender}</div>
        ))}
      </div>
    </div>
  );
}

export default GetUserData;
