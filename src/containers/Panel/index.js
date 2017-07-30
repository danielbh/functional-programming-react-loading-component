import React from 'react';
import PanelLoading from './loading'
import compose from '../../utils/compose'
import './index.css';

const Panel = (props) => (
  <div className="panel">
    {props.data}
  </div>
);

export default compose(PanelLoading)(Panel);