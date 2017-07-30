import React from 'react';

/**
 * @param loadingHandler a React component that represents loading state
 * @returns {Function} A React component that has receives fetched data as props
 */
export default function compose(loadingHandler) {
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
    return Container;
  }
}