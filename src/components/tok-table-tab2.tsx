
const TokTableTab2 = () => {
    return (
        <div className="tok-table reff" style={{ overflowX: 'auto' }}>
        <table>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>User ID</th>
                    <th>No. of Referrals</th>
                    <th>Referral Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="sn">1</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 5.png" alt=""/>
                            <span>Adam Smith</span>
                        </div>
                    </td>
                    <td data-label="date">650</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt=""/>
                            <span>321,200 Points </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-label="sn">2</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 6.png" alt=""/>
                            <span>Johnson</span>
                        </div>
                    </td>
                    <td data-label="date">615</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt=""/>
                            <span>250,150 Points </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-label="sn">3</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 7.png" alt=""/>
                            <span>James Hind</span>
                        </div>
                    </td>
                    <td data-label="date">302</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt=""/>
                            <span>115,200 Points </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td data-label="sn">4</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 8.png" alt=""/>
                            <span>Finneass</span>
                        </div>
                    </td>
                    <td data-label="date">290</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt=""/>
                            <span>110,150 Points </span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default TokTableTab2;