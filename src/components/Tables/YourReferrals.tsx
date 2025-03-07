// import TableEmptyMessage from "./TableEmptyMessage";

import { useEffect, useState } from "react";
import { YourReferralApi } from "../api/table";
import TableEmptyMessage from "./TableEmptyMessage";
import { YourReferral } from "../types/tables";

const YourReferrals = () => {
  const [data, setData] = useState<YourReferral[]>();

  async function fetchData() {
    const response = await YourReferralApi(`67c82a8ed9436fdffaefaa5d`);
    setData(response.referrals);
    return response;
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="tok-table reff" style={{ overflowX: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>User ID</th>
            <th>Referral Points</th>
            <th>Refer Date</th>
          </tr>
        </thead>
        <tbody>
          {  !!data &&  data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td data-label="sn">{index + 1 }</td>
                <td data-label="username">
                  <div className="img-name">
                    <img src="assets/images/avatars/Asset 5.png" alt="" />
                    <span>{item.referred_user}</span>
                  </div>
                </td>
                <td className="points" data-label="points">
                  <div className="img-name">
                    <img src="assets/images/dollar.png" alt="" />
                    <span>{item.points_earned }</span>
                  </div>
                </td>
                <td data-label="date">{item.referral_date.split('T')[0]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="no-data">
                <TableEmptyMessage />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default YourReferrals;
