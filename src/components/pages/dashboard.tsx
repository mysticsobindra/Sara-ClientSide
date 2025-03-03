import axios from 'axios';
import React, { useState } from 'react';

const Dashboard: React.FC = () => {
    const [userId, setUserId] = useState('');
    const [points, setPoints] = useState<number | ''>('');

    const handleUpdate = () => {
        console.log(`User ID: ${userId}, Points: ${points}`);
        axios
        .post(
          `http://localhost:3000/cms/balance/${userId}`,
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
          console.log("Login successful:", response.data);
        })
        .catch((error) => {
          console.error("There was an error logging in:", error);
        });
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <label>
                    User ID:
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Points:
                    <input
                        type="number"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                    />
                </label>
            </div>
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default Dashboard;