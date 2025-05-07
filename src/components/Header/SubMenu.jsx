import React from 'react';
import '../assets/css/SubMenu.css';

function SubMenu({ title, description, columns, footer }) {
    return (
        <div className="submenu-container">
            <div className="submenu-content">
                <h3>{title}</h3>
                <p className="submenu-description">{description}</p>
                
                <div className="submenu-columns">
                    {columns.map((column, index) => (
                        <ul key={index} className="submenu-column">
                            {column.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    ))}
                </div>
                
                <div className="submenu-footer">
                    <a href="#all-industries">{footer}</a>
                </div>
            </div>
        </div>
    );
}

export default SubMenu;