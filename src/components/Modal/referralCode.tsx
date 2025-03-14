import { Dispatch, SetStateAction, useState } from "react";
import { Settings } from "../types/settings";

interface props {
  setIsReferralModalActive: Dispatch<SetStateAction<boolean>>;
  settingsData: Settings | undefined;
}

const ReferralCode: React.FC<props> = ({
  settingsData,
  setIsReferralModalActive,
}) => {
  const [referralLink, setReferralLink] = useState<string>(
    "http://localhost:3000/signup?referral_code=123456"
  );

  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  function CopyLinkFunction() {
    setCopySuccess(true);
    setTimeout(() => {
      navigator.clipboard.writeText(referralLink);
      setCopySuccess(false);
    }, 4000);
  }

  return (
    <div className="content-holder">
      <div className="content">
        <div className="title">
          <h1>Share this link to refer a friend</h1>
          <div
            onClick={() => setIsReferralModalActive(false)}
            className="close-btn"
          >
            <i className="icon-plus"></i>
          </div>
        </div>
        <div className="wallet-img-wrapper">
          <div className="details">
            <label>Invite Friends</label>
            <input type="text" readOnly value={referralLink} />
            <button onClick={() => CopyLinkFunction()} className="btn copy">
              <i className="fa fa-copy" aria-hidden="true"></i>
              {copySuccess ? "Copied" : "Copy Link"}
            </button>
          </div>
        </div>
        <div className="reff-info-holder modal-holder">
          <div className="reff-info">
            <div className="reff-img">
              <img src="assets/images/refer.png" alt="" />
            </div>
            <div className="reff-text">
              <strong>Refer a friend</strong>
              <span>
                <i>+{settingsData?.new_referral_points} Points</i> for both you
                and friend
              </span>
            </div>
          </div>
          <div className="reff-info">
            <div className="reff-img">
              <img src="assets/images/coins.png" alt="" />
            </div>
            <div className="reff-text">
              <strong>Friend Plays, You Earn</strong>
              <span>
                <i>Earn {settingsData?.referral_earn_percentage}%</i> from each
                game friend plays
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralCode;
