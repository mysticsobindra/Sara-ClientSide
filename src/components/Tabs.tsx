const Tabs = () => {
    return (
        <div className="tab-head">
            <button className="tab active" data-target="#tab1">Your Referrals</button>
            <button className="tab" data-target="#tab2">Top Referrals</button>
            <button className="tab" data-target="#tab3">Referral Earnings</button>
        </div>
    );
};

export default Tabs;