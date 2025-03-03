import React from 'react';
import Navbar from '../navbar';
import PageContent from '../Modal/pageContent';
import ReferralCode from '../Modal/referralCode';
import LogoutModal from '../Modal/logout';
import Notice from '../Modal/Notice';

const Home: React.FC = () => {
    return (<>
        <div className="wrapper d-flex" style={{ width: '100vw', border: "1px solid black " }}>
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
    </>
    );
};

export default Home;