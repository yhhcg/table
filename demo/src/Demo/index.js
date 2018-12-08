import React from 'react';
import { hot } from 'react-hot-loader';
import Table from 'table';
import 'table/table.css';
import classes from './index.css';

/**
 * Export a form call api with post method
 */
@hot(module)
class Demo extends React.Component {
  columns = [
    {
      title: 'project',
      key: 'project',
      width: '80px',
    },
    ...Array.from({ length: 5 }, (item, index) => ({
      title: `column${index}`,
      key: `column${index}`,
      width: '10%',
    })),
    {
      title: 'pages',
      key: 'pages',
      width: '10%',
    }, {
      title: 'package',
      key: 'package',
    }, {
      title: 'duration',
      key: 'duration',
      width: '80px',
    },
  ];

  data = Array.from({ length: 20 }, (item, index) => {
    return {
      key: index.toString(),
      project: 'schedule',
      pages: '10',
      package: 'Ant design',
      duration: '45',
      ...Array.from({ length: 5 }, (subItem, subIndex) => (subIndex))
        .reduce((accumulator, value) => {
          return {
            ...accumulator,
            [`column${value}`]: `no.${value}`,
          };
        }, {}),
    };
  });

  /**
   * Render Something.
   * @return {Element}
   */
  render() {
    return (
      <React.Fragment>
        <h1>Simple table</h1>
        <Table
          columns={this.columns}
          data={this.data}
        />
        <h1>Fixed header and scrollable body</h1>
        <Table
          columns={this.columns}
          className={classes.table}
          data={this.data}
          isFixedHeaderAndScrollableBody={true}
        />
        <h1></h1>
      </React.Fragment>
    );
  }
}

export default Demo;
