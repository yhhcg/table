import React from 'react';
import PropTypes from 'prop-types';

class TableBody extends React.PureComponent {
  render() {
    const {
      columns,
      data,
    } = this.props;

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

TableBody.propTypes = {

};

export default TableBody;
