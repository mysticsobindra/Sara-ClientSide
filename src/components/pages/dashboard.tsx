import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import axiosInstance from "../api/axios";

const Dashboard: React.FC = () => {
  const [newReferralPoints, setNewReferralPoints] = useState<number>(0);
  const [platformEarnPercentage, setPlatformEarnPercentage] = useState<number>(0);
  const [referralEarnPercentage, setReferralEarnPercentage] = useState<number>(0);
  const [durationFilterData, setDurationFilterData] = useState<number[]>([]);

  useEffect(() => {
    
    axiosInstance.get(`/cms/settings`)
      .then(response => {
        const data = response.data;
      
        setNewReferralPoints(data.new_Referral_Points);
        setPlatformEarnPercentage(data.platform_earn_percentage);
        setReferralEarnPercentage(data.referral_earn_percentage);
        setDurationFilterData(data.duration_Filter_Data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleUpdate = () => {
  
    axiosInstance.put(
      `cms/newSettings`,
      {
        new_Referral_Points: newReferralPoints,
        platform_earn_percentage: platformEarnPercentage,
        referral_earn_percentage: referralEarnPercentage,
        duration_Filter_Data: durationFilterData,
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

  return (
    <main>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dashboard-form">
          <label>
            New Referral Points:
            <input
              type="number"
              value={newReferralPoints}
              onChange={(e) => setNewReferralPoints(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="dashboard-form">
          <label>
            Platform Earn Percentage:
            <input
              type="number"
              value={platformEarnPercentage}
              onChange={(e) => setPlatformEarnPercentage(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="dashboard-form">
          <label>
            Referral Earn Percentage:
            <input
              type="number"
              value={referralEarnPercentage}
              onChange={(e) => setReferralEarnPercentage(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="dashboard-form">
          <label>
            Duration Filter Data:
            <input
              type="text"
              value={durationFilterData.join(",")}
              onChange={(e) => setDurationFilterData(e.target.value.split(",").map(Number))}
            />
          </label>
        </div>
        <button className="button" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </main>
  );
};

export default Dashboard;