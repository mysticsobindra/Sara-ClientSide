import React from "react";

interface TabsProps {
    activeTab: number;
    setActiveTab: (tab: number) => void;
}

const Tabs:React.FC <TabsProps> = ({activeTab , setActiveTab}) => {
    return (
        <div className="tab-head">
            <button onClick={()=>setActiveTab(1)} className={`tab ${activeTab === 1 && 'active'}`} data-target="#tab1">Your Referrals</button>
            <button onClick={()=>setActiveTab(2)} className={`tab ${activeTab === 2 && 'active'}`} data-target="#tab3">Top Referrals</button>
            <button onClick={()=>setActiveTab(3)} className={`tab ${activeTab === 3 && 'active'}`} data-target="#tab2">Referral Earnings</button>
        </div>
    );
};

export default Tabs;