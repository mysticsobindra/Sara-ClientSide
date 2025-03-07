import { useEffect, useState } from "react";
import { TopReferralsTypes } from "../types/tables";
import { TopReferralsApi } from "../api/table";
import TableEmptyMessage from "./TableEmptyMessage";

const TopReferrals = () => {
  const [data, setData] = useState<TopReferralsTypes[]>();

  async function fetchData() {
    const response = await TopReferralsApi();
    console.log(response);
    setData(response.top_referrals);
    return response;
  }

  console.log(data);

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
            <th>No. of Referrals</th>
            <th>Referral Points</th>
          </tr>
        </thead>
        <tbody>
          {!!data && data.length > 0 ? (
            data.map((item, index) => (
              <>
                <tr key={index}>
                  <td data-label="sn">{index +1 }</td>
                  <td data-label="username">
                    <div className="img-name">
                      <img src="assets/images/avatars/Asset 5.png" alt="" />
                      <span>{item.referrer_id}</span>
                    </div>
                  </td>
                  <td data-label="date">{item.referrals.length}</td>
                  <td className="points" data-label="points">
                    <div className="img-name">
                      <img src="assets/images/dollar.png" alt="" />
                      <span>{item.total_points} </span>
                    </div>
                  </td>
                </tr>
              </>
            ))
          ) : (
            <>
              <tr>
                <td colSpan={4} className="no-data">
                  <TableEmptyMessage />
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TopReferrals;
