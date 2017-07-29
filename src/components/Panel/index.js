import React from 'react';
import PanelLoading from './loading'
import './index.css';

function compose(loadingHandler) {
  return function (Component) {
    class Container extends React.Component {

      // Need to initialize state initially to avoid not defined error
      state = {
        data: null
      };

      componentDidMount() {
        // Fake API call
        setTimeout(() => this.setState({data: "Loaded!"}), 1500)
      }

      render() {
        if (!this.state.data) {
          return loadingHandler();
        }
        return (
          <Component {...this.state} />
        );
      }
    }
    return Container
  }
}

const Panel = (props) => (
  <div className="panel">
    {props.data}
  </div>
);

export default compose(PanelLoading)(Panel);