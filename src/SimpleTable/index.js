import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const {
      columns,
      data,
    } = this.props;

    return (
      <table>
        <colgroup>
          {
            columns.map((column) => (
              <col
                key={column.key}
                style={{ width: column.width }}
              />
            ))
          }
        </colgroup>
        <thead>
          <tr>
            {
              columns.map((column) => (
                <th key={column.key}>
                  {column.title}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map((row) => (
              <tr key={row.key}>
                {
                  columns.map((column) => (
                    <td key={`${row.key}-${column.key}`}>
                      {row[column.key]}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
