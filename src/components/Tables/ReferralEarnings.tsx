import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ReferralEarningApi } from "../api/table";
import SelectionFlexer from "../selection-flexer";
import { ReferralEarningsTypes } from "../types/tables";
import TableEmptyMessage from "./TableEmptyMessage";
import { Settings } from "../types/settings";

interface props{
  settingsData: Settings | undefined
    setIsReferralModalActive: Dispatch<SetStateAction<boolean>>;

  NoDataMessage:string
}

const ReferralEarnings:React.FC<props> = ({settingsData,setIsReferralModalActive , NoDataMessage}) => {
  const [data, setData] = useState<ReferralEarningsTypes[]>();
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeDuration, setActiveDuration] = useState(7);

  async function fetchData() {
    const response = await ReferralEarningApi(`67c82a8ed9436fdffaefaa5d`,activeFilter,activeDuration);
    setData(response.referral_history);
    return response;
  }

  useEffect(() => {
    fetchData();
  }, [activeFilter, activeDuration]);

  return (
    <>
      <SelectionFlexer
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeDuration={activeDuration}
        setActiveDuration={setActiveDuration}
        settingsData={settingsData}
      />
      <div className="tok-table reff" style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>S.N</th>
              <th>User ID</th>
              <th>Referral Type</th>
              <th>Referral Points</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {!!data && data.length > 0 ? (
              data.map((item, index) => (
                <>
                  <tr>
                    <td data-label="sn">{index + 1}</td>
                    <td data-label="username">
                      <div className="img-name">
                        <img src="assets/images/avatars/Asset 5.png" alt="" />
                        <span>{item._id}</span>
                      </div>
                    </td>
                    <td data-label="date">
                      {item.earning_type == "game_played"
                        ? "Game Played"
                        : "New Referral"}
                    </td>
                    <td className="points" data-label="points">
                      <div className="img-name">
                        <img src="assets/images/dollar.png" alt="" />
                        <span>{item.points_earned}</span>
                      </div>
                    </td>
                    <td data-label="date">{item.created_at.split("T")[0]}</td>
                  </tr>
                </>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="no-data">
                  <TableEmptyMessage NoDataMessage={NoDataMessage} setIsReferralModalActive={setIsReferralModalActive}/>
                  <div></div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReferralEarnings;
