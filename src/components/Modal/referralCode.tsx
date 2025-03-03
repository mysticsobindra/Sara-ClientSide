
const ReferralCode = () => {
    return (
        <div className="content-holder">
        <div className="content">
           <div className="title">
              <h1>Share this link to refer a friend</h1>
              <div className="close-btn"><i className="icon-plus"></i></div>
           </div>
           <div className="wallet-img-wrapper">
             <div className="details">
                 <label>Invite Friends</label>
                 <input type="text" readOnly value="https://www.flaticon.com/search?word=coins&amp;color=color"/>
                 <button className="btn copy"><i className="fa fa-copy" aria-hidden="true"></i>Copy Link</button>
             </div>
         </div>
         <div className="reff-info-holder modal-holder">
             <div className="reff-info">
                 <div className="reff-img">
                     <img src="assets/images/refer.png" alt=""/>
                 </div>
                 <div className="reff-text">
                     <strong>Refer a friend</strong>
                     <span><i>+5 Points</i> for both you and friend</span>
                     <button type="button" className="referral"><i className="fa fa-plus"></i>Invite </button>
                 </div>
             </div>
             <div className="reff-info">
                 <div className="reff-img">
                     <img src="assets/images/coins.png" alt=""/>
                 </div>
                 <div className="reff-text">
                     <strong>Friend Plays, You Earn</strong>
                     <span><i>Earn 1%</i> from each game friend plays</span>
                 </div>
             </div>
         </div>
        </div>
     </div>
    );
};

export default ReferralCode;