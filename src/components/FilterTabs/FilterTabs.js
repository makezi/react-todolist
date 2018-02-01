import React, { Component } from "react";
import { VisibilityFilters } from "../../constants";
import Tab from "../Tab/Tab";
import "./FilterTabs.css";

class FilterTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(filter, index) {
    this.props.setFilter(filter);
    this.setState({
      activeTab: index === this.state.activeTab ? 0 : index
    });
  }

  render() {
    return (
      <div className="filter-tabs">
        {Object.entries(VisibilityFilters)
          .reverse()
          .map((filter, index) => {
            return (
              <Tab
                onClick={() => {
                  this.handleTabClick(filter[1], index);
                }}
                key={index}
                index={index}
                isActive={index === this.state.activeTab}
              >
                {filter[1]}
              </Tab>
            );
          })}
      </div>
    );
  }
}

export default FilterTabs;
