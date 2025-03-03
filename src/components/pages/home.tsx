import React from "react";
import Navbar from "../navbar";
import PageContent from "../Modal/pageContent";
import ReferralCode from "../Modal/referralCode";
import LogoutModal from "../Modal/logout";
import Notice from "../Modal/Notice";

const Home: React.FC = () => {
  return (
    <>
      <main 
        style={{ width: "100vw", border: "3px solid white" }}>
        <div
          className="wrapper d-flex"
        >
          <Navbar />
          <PageContent />
        </div>
        <div className="custom-modal referral-modal">
          <ReferralCode />
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
