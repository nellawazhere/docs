import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FontAwesomeExample() {
  return (
    <div className="font-awesome-examples">
      <h2>Font Awesome Icons Example</h2>
      
      <div className="icon-row">
        <div className="icon-item">
          <FontAwesomeIcon icon="search" size="2x" />
          <p>Search Icon</p>
        </div>
        
        <div className="icon-item">
          <FontAwesomeIcon icon="user" size="2x" />
          <p>User Icon</p>
        </div>
        
        <div className="icon-item">
          <FontAwesomeIcon icon="check-circle" size="2x" />
          <p>Check Circle Icon</p>
        </div>
      </div>
      
      <h3>Regular Icons</h3>
      <div className="icon-row">
        <div className="icon-item">
          <FontAwesomeIcon icon={['far', 'calendar']} size="2x" />
          <p>Calendar Icon (Regular)</p>
        </div>
      </div>
      
      <h3>Brand Icons</h3>
      <div className="icon-row">
        <div className="icon-item">
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          <p>GitHub Icon</p>
        </div>
        
        <div className="icon-item">
          <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          <p>Twitter Icon</p>
        </div>
      </div>
      
      <h3>Styling Examples</h3>
      <div className="icon-row">
        <div className="icon-item">
          <FontAwesomeIcon icon="search" size="3x" color="#3578e5" />
          <p>Colored Icon</p>
        </div>
        
        <div className="icon-item">
          <FontAwesomeIcon icon="user" size="3x" spin />
          <p>Spinning Icon</p>
        </div>
        
        <div className="icon-item">
          <FontAwesomeIcon icon="check-circle" size="3x" pulse />
          <p>Pulsing Icon</p>
        </div>
      </div>
    </div>
  );
}
