import type React from "react";
import { useEffect, useState } from "react";
import "../css/dashboard.css";
import { GetSettingsApi, UpdateSettingsApi } from "../api/settings";
import { Settings } from "../types/settings";

export default function Dashboard() {
  // Form state
  const [durationInput, setDurationInput] = useState<number>();
  const [referralTypeInput, setReferralTypeInput] = useState<string>();
  const [durationList, setDurationList] = useState<number[]>([]);
  const [referralList, setReferralList] = useState<string[]>([]);
  const [newReferralPoints, setNewReferralPoints] = useState<number>();
  const [referralEarnPercentage, setReferralEarnPercentage] =
    useState<number>();
  const [platformEarnPercentage, setPlatformEarnPercentage] =
    useState<number>();
  const [notice, setNotice] = useState<string>();

  // Current settings from backend
  const [currentSettings, setCurrentSettings] = useState<Settings>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching data from backend
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await GetSettingsApi();

        const { _id, __v, ...OtherCleanData } = response.settings;
        setCurrentSettings(OtherCleanData);
        setDurationList(response.settings.duration_filter_data.sort((a: number, b: number) => a - b));
        setReferralList(response.settings.filter);
        setNewReferralPoints(response.settings.new_referral_points);
        setReferralEarnPercentage(response.settings.referral_earn_percentage);
        setPlatformEarnPercentage(response.settings.platform_earn_percentage);
        setNotice(response.settings.notices);
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const addTodo = (type: "duration" | "referral") => {
    if (type === "duration") {
      if (
        durationInput === undefined ||
        durationInput.toString().trim() === ""
      ) {
        alert("Please enter a duration.");
        return;
      }
      if (durationInput !== undefined) {
        setDurationList([...durationList, durationInput]);
      }
    } else {
      if ((referralTypeInput ?? "").trim() === "") {
        alert("Please enter a referral type.");
        return;
      }
      if (referralTypeInput !== undefined) {
        setReferralList([...referralList, referralTypeInput]);
      }
      setReferralTypeInput("");
    }
  };

  const deleteTodo = (type: "duration" | "referral", index: number) => {
    if (type === "duration") {
      const newList = [...durationList];
      newList.splice(index, 1);
      setDurationList(newList);
    } else {
      const newList = [...referralList];
      newList.splice(index, 1);
      setReferralList(newList);
    }
  };

  // Handle key press to add items when Enter is pressed
  const handleKeyPress = (
    e: React.KeyboardEvent,
    type: "duration" | "referral"
  ) => {
    if (e.key === "Enter") {
      addTodo(type);
    }
  };

  const handleUpdate = async () => {
    try {
      setIsSubmitting(true);

      // Prepare the data to send
      const data = {
        duration_filter_data: durationList,
        filter: referralList,
        new_referral_points: newReferralPoints ?? 0,
        referral_earn_percentage: referralEarnPercentage ?? 0,
        platform_earn_percentage: platformEarnPercentage ?? 0,
        notices: notice ?? "",
      };

      const response = await UpdateSettingsApi(data);
      console.log("response", response);

      if (!!response) {
        setCurrentSettings(data);
        alert("Settings updated successfully!");
      }

    } catch (error) {
      console.error("Error updating settings:", error);
      alert("Failed to update settings. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h1>Referral Program Settings</h1>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-container grid-2x2">
          {/* Duration */}
          <div className="container">
            <div className="form-title">Duration Filter</div>
            <div className="input-group todo-input">
              <input
                type="text"
                id="duration"
                placeholder="Add Days duration"
                value={durationInput}
                onChange={(e) =>
                  setDurationInput(
                    Number(e.target.value.replace(/[^0-9]/g, ""))
                  )
                }
                onKeyPress={(e) => handleKeyPress(e, "duration")}
              />
              <button onClick={() => addTodo("duration")}>Add Duration</button>
            </div>
            <ul className="todo-list">
              {durationList.map((item, index) => (
                <li className="todo-item" key={`duration-${index}`}>
                  {item} days
                  <button onClick={() => deleteTodo("duration", index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Referral Type */}
          <div className="container">
            <div className="form-title">Referral Filter Type</div>
            <div className="input-group todo-input">
              <input
                type="text"
                id="ReferralType"
                placeholder="Add Referral Type"
                value={referralTypeInput}
                onChange={(e) => setReferralTypeInput(e.target.value)}
              />
              <button onClick={() => addTodo("referral")}>
                Add Referral Type
              </button>
            </div>
            <ul className="todo-list">
              {referralList.map((item, index) => (
                <li className="todo-item" key={`referral-${index}`}>
                  {item}
                  <button onClick={() => deleteTodo("referral", index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Calculation */}
          <div className="container">
            <div className="form-title">Calculation</div>
            <div className="input-group">
              <input
                type="text"
                id="NewReferralPoints"
                placeholder=" "
                value={newReferralPoints}
                onChange={(e) =>
                  setNewReferralPoints(
                    Number(e.target.value.replace(/[^0-9]/g, ""))
                  )
                }
              />
              <label htmlFor="NewReferralPoints">New Referral Points</label>
            </div>
            <div className="input-group percent-input">
              <input
                type="text"
                id="referralEarnPercentage"
                placeholder=" "
                inputMode="numeric"
                value={referralEarnPercentage}
                onChange={(e) =>
                  setReferralEarnPercentage(
                    Number(e.target.value.replace(/[^0-9]/g, ""))
                  )
                }
              />
              <label htmlFor="referralEarnPercentage">
                Referral Earn Percentage
              </label>
              <span className="percent-icon">%</span>
            </div>
            <div className="input-group percent-input">
              <input
                type="text"
                id="platformEarnPercentage"
                placeholder=" "
                inputMode="numeric"
                value={platformEarnPercentage}
                onChange={(e) =>
                  setPlatformEarnPercentage(
                    Number(e.target.value.replace(/[^0-9]/g, ""))
                  )
                }
              />
              <label htmlFor="platformEarnPercentage">
                Platform Earn Percentage
              </label>
              <span className="percent-icon">%</span>
            </div>
          </div>

          {/* Notice */}
          <div className="container">
            <div className="form-title">Notice</div>
            <div className="input-group">
              <textarea
                id="additionalNotes"
                placeholder=" "
                rows={4}
                value={notice}
                onChange={(e) => setNotice(e.target.value)}
              ></textarea>
              <label htmlFor="additionalNotes">Notice</label>
            </div>
          </div>
        </div>

        {/* Global Update Button */}
        <div className="update-container">
          <button
            className="global-update-button"
            onClick={handleUpdate}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update All Settings"}
          </button>
        </div>

        {/* Current Settings Preview */}
        <div className="preview-container">
          <h2 className="preview-title">Current Settings</h2>
          <div className="preview-content">
            <div className="preview-section">
              <h3>Durations</h3>
              <ul className="preview-list">
                {currentSettings?.duration_filter_data.map(
                  (duration, index) => (
                    <li key={`current-duration-${index}`}>{duration} days</li>
                  )
                )}
              </ul>
            </div>

            <div className="preview-section">
              <h3>Referral Types</h3>
              <ul className="preview-list">
                {currentSettings?.filter.map((type, index) => (
                  <li key={`current-referral-${index}`}>{type}</li>
                ))}
              </ul>
            </div>

            <div className="preview-section">
              <h3>Calculation</h3>
              <p>
                <strong>New Referral Points:</strong>{" "}
                {currentSettings?.new_referral_points}
              </p>
              <p>
                <strong>Referral Earn Percentage:</strong>{" "}
                {currentSettings?.referral_earn_percentage}%
              </p>
              <p>
                <strong>Platform Earn Percentage:</strong>{" "}
                {currentSettings?.platform_earn_percentage}%
              </p>
            </div>
            <div className="preview-section">
              <h3>Notice</h3>
              <p className="preview-notice">{currentSettings?.notices}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
