import { useState } from "react";
import { Settings } from "./types/settings";

interface SelectionFlexerProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  activeDuration: number;
  setActiveDuration: (duration: number) => void;
   settingsData: Settings | undefined
}

const SelectionFlexer: React.FC<SelectionFlexerProps> = ({
  settingsData,
  activeFilter,
  setActiveFilter,
  activeDuration,
  setActiveDuration,
}) => {
   
  const [IsFilter, setIsFilter] = useState(false);
  const [IsDuration, setIsDuration] = useState(false);

  return (
    <div className="selection-flexer multiple">
      <div className="crash-bet-amt">
        <div className="custom-select">
          <label htmlFor="#">Referral Type</label>
          <div
            onClick={() => {
              setIsFilter(!IsFilter);
            }}
            className="select-input"
          >
            <input
              type="text"
              className="select-selected"
              value={activeFilter}
              readOnly
            />
            <i className="icon-down-arrow"></i>
          </div>
          <div
            className={`select-items ${IsFilter && "show"}`}
            style={{ display: "none" }}
          >
            <div className="items-holder">
              {settingsData?.filter.map((filter, index) => (
                <div
                  onClick={() => {
                    setActiveFilter(filter);
                    setIsFilter(false);
                  }}
                  key={index}
                  className={`select-item ${
                    filter === activeFilter ? "selected" : ""
                  }`}
                  data-value={filter}
                >
                  <span>{filter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="crash-bet-amt">
        <div className="custom-select">
          <label htmlFor="#">Duration</label>
          <div
            onClick={() => {
              setIsDuration(!IsDuration);
            }}
            className="select-input"
          >
            <input
              type="text"
              className="select-selected"
              value={`Past ${activeDuration} Days`}
              readOnly
            />
            <i className="icon-down-arrow"></i>
          </div>
          <div
            className={`select-items ${IsDuration && "show"}`}
            style={{ display: "none" }}
          >
            <div className="items-holder">
              {settingsData?.duration_filter_data.map((duration, index) => (
                <div
                  onClick={() => {
                    setActiveDuration(duration);
                    setIsDuration(false);
                  }}
                  key={index}
                  className={`select-item ${
                    `Past ${duration} Days` == `Past ${activeDuration} Days` ? "selected" : ""
                  }`}
                  data-value={duration}
                >
                  <span>{`Past ${duration} Days`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionFlexer;
