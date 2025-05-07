import { useState } from 'react';
import './HorizontalTab.css'; // Adjust the path as necessary

const HorizontalTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="horizontal-tab-container">
      <div className="tab-layout">
        {/* Tabs sidebar */}
        <div className="tab-sidebar">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-item ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="tab-icon">{tab.icon}</div>
              <span className="tab-title">{tab.title}</span>
            </div>
          ))}
        </div>
        
        {/* Content area */}
        <div className="tab-content-area">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default HorizontalTab;