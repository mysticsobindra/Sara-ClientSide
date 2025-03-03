

const TokTable = () => {
    return (
        <div className="tok-table reff" style={{ overflowX: 'auto' }}>
            <table>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>User ID</th>
                        <th>Referral Points</th>
                        <th>Refer Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="sn">1</td>
                        <td data-label="username">
                            <div className="img-name">
                                <img src="assets/images/avatars/Asset 5.png" alt="" />
                                <span>0xaae39950625661ae1b977E1042E18633aAee731F</span>
                            </div>
                        </td>
                        <td className="points" data-label="points">
                            <div className="img-name">
                                <img src="assets/images/dollar.png" alt="" />
                                <span>300 Points </span>
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
                        <td className="points" data-label="points">
                            <div className="img-name">
                                <img src="assets/images/dollar.png" alt="" />
                                <span>250 Points </span>
                            </div>
                        </td>
                        <td data-label="date">2023/02/18</td>
                    </tr>
                    <tr>
                        <td data-label="sn">3</td>
                        <td data-label="username">
                            <div className="img-name">
                                <img src="assets/images/avatars/Asset 7.png" alt="" />
                                <span>0xaae39950625661ae1b977E1042E18633aAee731F</span>
                            </div>
                        </td>
                        <td className="points" data-label="points">
                            <div className="img-name">
                                <img src="assets/images/dollar.png" alt="" />
                                <span>200 Points </span>
                            </div>
                        </td>
                        <td data-label="date">2023/02/15</td>
                    </tr>
                    <tr>
                        <td data-label="sn">4</td>
                        <td data-label="username">
                            <div className="img-name">
                                <img src="assets/images/avatars/Asset 8.png" alt="" />
                                <span>0xaae39950625661ae1b977E1042E18633aAee731F</span>
                            </div>
                        </td>
                        <td className="points" data-label="points">
                            <div className="img-name">
                                <img src="assets/images/dollar.png" alt="" />
                                <span>150 Points </span>
                            </div>
                        </td>
                        <td data-label="date">2023/02/15</td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="no-data">
                            <div className="no-tickets">
                                <img src="assets/images/ghost.png" alt="" />
                                <span>You have not referred anyone yet.</span>
                                <button className="referral">Refer & Earn Now</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TokTable;