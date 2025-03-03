
const ListTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>User ID</th>
                    <th>Referral Type</th>
                    <th>Referral Points</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="sn">1</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 5.png" alt="" />
                            <span>Adam Smith</span>
                        </div>
                    </td>
                    <td data-label="date">Game Played</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt="" />
                            <span>3 Points </span>
                        </div>
                    </td>
                    <td data-label="date">2023/02/15</td>
                </tr>
                <tr>
                    <td data-label="sn">2</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 6.png" alt="" />
                            <span>Johnson</span>
                        </div>
                    </td>
                    <td data-label="date">Game Played</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt="" />
                            <span>2 Points </span>
                        </div>
                    </td>
                    <td data-label="date">2023/02/18</td>
                </tr>
                <tr>
                    <td data-label="sn">3</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 7.png" alt="" />
                            <span>James Hind</span>
                        </div>
                    </td>
                    <td data-label="date">Game Played</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt="" />
                            <span>1.1 Points </span>
                        </div>
                    </td>
                    <td data-label="date">2023/02/15</td>
                </tr>
                <tr>
                    <td data-label="sn">4</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 8.png" alt="" />
                            <span>Finneass</span>
                        </div>
                    </td>
                    <td data-label="date">Game Played</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt="" />
                            <span>1.1 Points </span>
                        </div>
                    </td>
                    <td data-label="date">2023/02/15</td>
                </tr>
                <tr>
                    <td data-label="sn">1</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 5.png" alt="" />
                            <span>Adam Smith</span>
                        </div>
                    </td>
                    <td data-label="date">New Referral</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt="" />
                            <span>100 Points </span>
                        </div>
                    </td>
                    <td data-label="date">2023/02/05</td>
                </tr>
                <tr>
                    <td data-label="sn">2</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 6.png" alt="" />
                            <span>Johnson</span>
                        </div>
                    </td>
                    <td data-label="date">New Referral</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt="" />
                            <span>100 Points </span>
                        </div>
                    </td>
                    <td data-label="date">2023/01/31</td>
                </tr>
                <tr>
                    <td data-label="sn">3</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 7.png" alt="" />
                            <span>James Hind</span>
                        </div>
                    </td>
                    <td data-label="date">New Referral</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt="" />
                            <span>100 Points </span>
                        </div>
                    </td>
                    <td data-label="date">2023/01/15</td>
                </tr>
                <tr>
                    <td data-label="sn">4</td>
                    <td data-label="username">
                        <div className="img-name">
                            <img src="assets/images/avatars/Asset 8.png" alt="" />
                            <span>Finneass</span>
                        </div>
                    </td>
                    <td data-label="date">New Referral</td>
                    <td className="points" data-label="points">
                        <div className="img-name">
                            <img src="assets/images/dollar.png" alt="" />
                            <span>100 Points </span>
                        </div>
                    </td>
                    <td data-label="date">2023/01/10</td>
                </tr>
                <tr>
                    <td colSpan={5} className="no-data">
                        <div className="no-tickets">
                            <img src="assets/images/ghost.png" alt="" />
                            <span>You have earnings yet. Refer friends to earn Referral Points.</span>
                            <button className="referral">Refer & Earn Now</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ListTable;