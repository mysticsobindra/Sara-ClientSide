import React, { Dispatch, SetStateAction } from "react";

interface props {
  setIsReferralModalActive: Dispatch<SetStateAction<boolean>>;
}

const TableEmptyMessage: React.FC<props> = ({setIsReferralModalActive}) => {
  return (
  
        <div className="no-tickets">
          <img src="assets/images/ghost.png" alt="" />
          <span>You have not referred anyone yet.</span>
          <button onClick={()=> setIsReferralModalActive(true)} className="referral">Refer & Earn Now</button>
        </div>
    
  );
};

export default TableEmptyMessage;
