import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import axiosInstance from "../api/axios";

const Dashboard: React.FC = () => {
  const [newReferralPoints, setNewReferralPoints] = useState<number>();
  const [platformEarnPercentage, setPlatformEarnPercentage] =
    useState<number>();
  const [referralEarnPercentage, setReferralEarnPercentage] =
    useState<number>();
  const [durationFilterData, setDurationFilterData] = useState<number[]>([]);

  useEffect(() => {
    axiosInstance
      .get(`/cms/settings`)
      .then((response) => {
        const data = response.data;

        setNewReferralPoints(data.settings.new_referral_points);
        setPlatformEarnPercentage(data.settings.platform_earn_percentage);
        setReferralEarnPercentage(data.settings.referral_earn_percentage);
        setDurationFilterData(data.settings.duration_filter_data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleUpdate = () => {
    axiosInstance
      .put(
        `cms/newSettings`,
        {
          new_referral_points: newReferralPoints,
          platform_earn_percentage: platformEarnPercentage,
          referral_earn_percentage: referralEarnPercentage,
          duration_filter_data: durationFilterData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        alert("Settings updated successfully");
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
              onChange={(e) =>
                setPlatformEarnPercentage(Number(e.target.value))
              }
            />
          </label>
        </div>
        <div className="dashboard-form">
          <label>
            Referral Earn Percentage:
            <input
              type="number"
              value={referralEarnPercentage}
              onChange={(e) =>
                setReferralEarnPercentage(Number(e.target.value))
              }
            />
          </label>
        </div>
        <div className="dashboard-form">
          <label>
            Duration Filter Data:
            <input
              type="text"
              value={durationFilterData}
              onChange={(e) =>
                setDurationFilterData(e.target.value.split(",").map(Number))
              }
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
