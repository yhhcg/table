import React from 'react';
import { hot } from 'react-hot-loader';
import Table from 'table';
import 'table/table.css';

/**
 * Export a form call api with post method
 */
@hot(module)
class Demo extends React.Component {
  columns = [
    {
      title: 'project',
      key: 'project',
      fixed: 'left',
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
      width: '10%',
    }, {
      title: 'duration',
      key: 'duration',
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
      <Table
        columns={this.columns}
        data={this.data}
      />
    );
  }
}

export default Demo;
