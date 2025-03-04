import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import axiosInstance from "../api/axios";

const Dashboard: React.FC = () => {
  const [userId, setUserId] = useState("67c598163a1330d0f4cec143");
  const [points, setPoints] = useState<number | "">(3000);

  const handleUpdate = () => {
    console.log(`User ID: ${userId}, Points: ${points}`);
    axiosInstance
      .post(
        `cms/balance/${userId}`,
        {
          Balance: points,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("success:", response.data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  useEffect(() => {


  }, []);

  return (
    <main>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dashboard-form">
          <label>
            User ID:
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
        </div>
        <div className="dashboard-form">
          <label>
            Points:
            <input
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
            />
          </label>
        </div>
        <button className="button" onClick={handleUpdate}>
          Update
        </button>
      </div>

      {/* <div className="User-list">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => {
              return (
                <tr>
                  <td>{user.userId}</td>
                  <td>{user.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div> */}
    </main>
  );
};

export default Dashboard;
