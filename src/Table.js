import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const {
      columns,
      data,
    } = this.props;

    return (
      <div className="table">
        <div className="table-header">
          <table className="table-content-table">
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
          </table>
        </div>
        <div className="table-body">
          <table className="table-content-table">
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
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
