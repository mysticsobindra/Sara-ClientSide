import React from 'react';
import PageContentNav from '../pageContentNav';
import BoxContainer from '../BoxContainer';
import Tabs from '../Tabs';
import TokTable from '../tok-table';
import TextInfoDepo from '../text-info-depo';
import TokTableTab2 from '../tok-table-tab2';
import SelectionFlexer from '../selection-flexer';
import ListTable from '../ListTable';

const PageContent: React.FC = () => {
    return (
        <div id="content" className="fluid" >
        <PageContentNav/>
        <div className="body-content ">
          <div className="wallet-container tab-container">
            <BoxContainer />
            <Tabs />
            <div className="pill-container">
              <div className="pill-content active" id="tab1">
                <TokTable />
                <TextInfoDepo />
              </div>
              <div className="pill-content" id="tab2">
                <TokTableTab2 />
              </div>
              <div className="pill-content" id="tab3">
                <SelectionFlexer />
                <div className="tok-table reff" style={{ overflowX: 'auto' }}>
                  <ListTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PageContent;