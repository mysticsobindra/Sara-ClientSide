import React, { Dispatch, SetStateAction } from "react";

interface props {
  setIsReferralModalActive: Dispatch<SetStateAction<boolean>>;
  NoDataMessage:string
}

const TableEmptyMessage: React.FC<props> = ({setIsReferralModalActive , NoDataMessage}) => {
  return (
  
        <div className="no-tickets">
          <img src="assets/images/ghost.png" alt="" />
          <span>{NoDataMessage}</span>
          <button onClick={()=> setIsReferralModalActive(true)} className="referral">Refer & Earn Now</button>
        </div>
    
  );
};

export default TableEmptyMessage;
