import '../style/index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

// Fonction de la box collapse et de son parent avec le chevron pourla page de logement et de a propos
function CollapseBox({ title, children }) {
    const [collapse, setCollapse] = useState(false);

    const handleCollapse = () => {
        setCollapse(!collapse); 
    };

    return (
        <div className='categoriesBox'>
            <div className='categories'>
                <h4>{title}</h4>
                <ChevronUp collapse={collapse} handleCollapse={handleCollapse} />
            </div>
            <div className={`collapseContent ${collapse ? 'slide' : ''}`}>
                {children}
            </div>
        </div>
    );
}

function ChevronUp({ collapse, handleCollapse }) {
    return (
        <FontAwesomeIcon 
            icon={faChevronUp} 
            className={`deroule ${collapse ? 'rotate' : ''}`} 
            onClick={handleCollapse} 
        />
    );
}

export default CollapseBox;