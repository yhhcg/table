import React from 'react';
import PropTypes from 'prop-types';

class TableBody extends React.PureComponent {
  render() {
    const {
      columns,
      data,
    } = this.props;

    return (
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
    );
  }
}

TableBody.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default TableBody;
