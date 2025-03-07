import React, { Dispatch, SetStateAction, useState } from "react";
import PageContentNav from "../pageContentNav";
import BoxContainer from "../BoxContainer";
import Tabs from "../Tabs";
import YourReferrals from "../Tables/YourReferrals";
import TextInfoDepo from "../text-info-depo";
import TopReferrals from "../Tables/TopReferrals";
import ReferralEarnings from "../Tables/ReferralEarnings";
import { Settings } from "../types/settings";

interface props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setIsReferralModalActive: Dispatch<SetStateAction<boolean>>;
  IsNavBarActive: boolean;
  settingsData: Settings | undefined;
}

const PageContent: React.FC<props> = ({
  settingsData,
  setIsReferralModalActive,
  setIsActive,
  IsNavBarActive,
}) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div id="content" className="fluid">
      <PageContentNav
        setIsActive={setIsActive}
        IsNavBarActive={IsNavBarActive}
      />
      <div className="body-content ">
        <div className="wallet-container tab-container">
          <BoxContainer
            settingsData={settingsData}
            setIsReferralModalActive={setIsReferralModalActive}
          />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="pill-container">
            <div className="pill-content active">
              {activeTab === 1 ? (
                <>
                  <YourReferrals NoDataMessage={"you haven't referred anyone yet"} setIsReferralModalActive={setIsReferralModalActive} />
                  {settingsData?.notices ?
                    <TextInfoDepo message={settingsData?.notices} />
                    :null
                  }
                  
                </>
              ) : activeTab === 2 ? (
                <TopReferrals NoDataMessage={"data not found"}  setIsReferralModalActive={setIsReferralModalActive}/>
              ) : (
                <>
                  <ReferralEarnings NoDataMessage={"you haven't referred anyone yet"} setIsReferralModalActive={setIsReferralModalActive} settingsData={settingsData} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
