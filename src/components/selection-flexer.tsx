

const SelectionFlexer= () => {
  return (
    <div className="selection-flexer multiple">
    <div className="crash-bet-amt">
        <div className="custom-select">
            <label htmlFor="#">Referral Type</label>
           <div className="select-input">
              <input type="text" className="select-selected" value="All Games" readOnly/>
              <i className="icon-down-arrow"></i>
           </div>
           <div className="select-items" style={{ display: 'none' }}>
              <div className="items-holder">
                 <div className="select-item selected" data-value="All">
                    <span>All</span>
                 </div>
                 <div className="select-item" data-value="New Referral">
                    <span>New Referral</span>
                 </div>
                 <div className="select-item" data-value="Games Played">
                    <span>Games Played</span>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <div className="crash-bet-amt">
        <div className="custom-select">
            <label htmlFor="#">Duration</label>
           <div className="select-input">
              <input type="text" className="select-selected" value="Past 60 Days" readOnly/>
              <i className="icon-down-arrow"></i>
           </div>
           <div className="select-items" style={{ display: 'none' }}>
              <div className="items-holder">
                <div className="select-item selected" data-value="Past 60 Days">
                    <span>Past 60 Days</span>
                 </div> 
                <div className="select-item" data-value="Past 30 Days">
                    <span>Past 30 Days</span>
                 </div>
                 <div className="select-item" data-value="Past 7 Days">
                    <span>Past 7 Days</span>
                 </div>
                 <div className="select-item " data-value="Past 24 hours">
                    <span>Past 24 hours</span>
                 </div>
              </div>
           </div>
        </div>
     </div>
</div>
  );
};

export default SelectionFlexer;
