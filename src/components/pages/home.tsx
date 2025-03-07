import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import PageContent from "../Modal/pageContent";
import ReferralCode from "../Modal/referralCode";
import LogoutModal from "../Modal/logout";
import Notice from "../Modal/Notice";
import { Settings } from "../types/settings";
import { GetSettingsApi } from "../api/settings";

const Home: React.FC = () => {
  const [IsNavBarActive, setIsActive] = useState(false);
  const [IsReferralModalActive, setIsReferralModalActive] = useState(false);
  const [settingsData, setSettingsData] = useState<Settings | undefined>();

  async function FetchSettingsData() {
    const response = await GetSettingsApi();
    setSettingsData(response.settings);
  }

  useEffect(() => {
    FetchSettingsData();
  }, []);

  return (
    <>
      <main>
        <div className="wrapper d-flex">
          <Navbar IsNavBarActive={IsNavBarActive} />
          <PageContent
            setIsReferralModalActive={setIsReferralModalActive}
            setIsActive={setIsActive}
            IsNavBarActive={IsNavBarActive}
            settingsData={settingsData}
          />
        </div>
        <div
          className="custom-modal referral-modal"
          style={{ display: `${IsReferralModalActive ? "block" : "none"}` }}
        >
          <ReferralCode settingsData={settingsData} setIsReferralModalActive={setIsReferralModalActive} />
        </div>
        <div className="forgot-password logout-modal">
          <LogoutModal />
        </div>
        <div className="notice-modal">
          <Notice />
        </div>
      </main>
    </>
  );
};

export default Home;
