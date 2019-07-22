import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tab from '../Tab';
import { VisibilityFilters } from '../../constants';
import './FilterTabs.css';

const FilterTabs = ({ setFilter }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnTabClick = (filter, index) => {
    setFilter(filter);
    const currentActiveTab = index === activeTab ? 0 : index;
    setActiveTab(currentActiveTab);
  };

  return (
    <div className="filter-tabs">
      {Object.entries(VisibilityFilters)
        .reverse()
        .map((filter, index) => {
          return (
            <Tab
              onClick={() => handleOnTabClick(filter[1], index)}
              key={index}
              index={index}
              isActive={index === activeTab}
            >
              {filter[1]}
            </Tab>
          );
        })}
    </div>
  );
};

FilterTabs.propTypes = {
  setFilter: PropTypes.func.isRequired
};

export default FilterTabs;
