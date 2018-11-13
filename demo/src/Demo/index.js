import React from 'react';
import { hot } from 'react-hot-loader';
import demo from 'table';

/**
 * Export a form call api with post method
 */
@hot(module)
class Demo extends React.Component {
  /**
   * Render Something.
   * @return {Node}
   */
  render() {
    return <div>{demo}</div>;
  }
}

export default Demo;
