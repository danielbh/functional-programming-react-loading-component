import React from 'react';
import './index.css';
import ReactLoading from 'react-loading'

const PanelLoading = () => (
  <div className="panel">
      <ReactLoading className="loading-widget" type="bars" color="white" delay={0}/>
  </div>
);

export default PanelLoading