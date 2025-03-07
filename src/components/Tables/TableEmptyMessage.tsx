import React from "react";

const TableEmptyMessage: React.FC = () => {
  return (
  
        <div className="no-tickets">
          <img src="assets/images/ghost.png" alt="" />
          <span>You have not referred anyone yet.</span>
          <button className="referral">Refer & Earn Now</button>
        </div>
    
  );
};

export default TableEmptyMessage;
