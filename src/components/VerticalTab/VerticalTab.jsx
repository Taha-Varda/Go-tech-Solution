import React, { useState } from 'react';
import YellowButton from '../../assets/elements/YellowBtn';
import './VerticalTab.css';

const VerticalTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="vertical-tab-container">
      {/* Tab Headers */}
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="tab-content">
        <div className='tab-content-data'>
        <h2 className="tab-title">{tabs[activeTab].title}</h2>
        <p className="tab-description">{tabs[activeTab].description}</p>

        {tabs[activeTab].stats && (
          <div className="tab-stats">
            <h3 className="stats-title">{tabs[activeTab].stats.title}</h3>
            <ul className="stats-list">
              {tabs[activeTab].stats.items.map((item, index) => (
                <li key={index} className="stats-item">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {tabs[activeTab].cta && (  
            <div className="tab-cta-btn">
            <YellowButton text={tabs[activeTab].cta} href="#"/>  
            </div>
        )}
        </div>
        {tabs[activeTab].logos && (
          <div className="tab-logos">
            {tabs[activeTab].logos.map((logo, index) => (
              <div key={index} className="logo-item">
                <img src={logo.icon} alt={logo.name} className="logo-icon" />
                <p className="logo-name">{logo.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalTab;